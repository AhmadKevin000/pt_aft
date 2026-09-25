import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const RESOURCES = [
  "products",
  "portfolios",
  "testimonials",
  "faqs",
  "stats",
  "users",
  "messages",
] as const;

type Resource = (typeof RESOURCES)[number];

const PRISMA_MODELS: Record<Resource, string> = {
  products: "product",
  portfolios: "portfolio",
  testimonials: "testimonial",
  faqs: "fAQ",
  stats: "industrialStats",
  users: "user",
  messages: "message",
};

const NUMERIC_IDS: Record<Resource, boolean> = {
  products: true,
  portfolios: true,
  testimonials: false,
  faqs: false,
  stats: false,
  users: true,
  messages: true,
};

type Sorter = { field: string; order: "asc" | "desc" };
type Filter = { field: string; operator: string; value: unknown };

const DATE_FIELDS: Partial<Record<Resource, string[]>> = {
  portfolios: ["dateBuilt"],
};

function parseDates(resource: Resource, data: Record<string, unknown>) {
  const fields = DATE_FIELDS[resource];
  if (!fields) return data;
  const copy = { ...data };
  for (const f of fields) {
    if (typeof copy[f] === "string") {
      copy[f] = new Date(copy[f] as string);
    }
  }
  return copy;
}

function sanitize<T extends Record<string, unknown>>(resource: Resource, data: T) {
  const copy = { ...data };
  delete copy.password;
  return parseDates(resource, copy);
}

async function hashPasswordIfNeeded(resource: Resource, variables: Record<string, unknown>) {
  if (resource !== "users") return variables;
  const copy = { ...variables };
  if (typeof copy.password === "string" && copy.password.length > 0) {
    copy.password = await bcrypt.hash(copy.password, 10);
  } else {
    delete copy.password;
  }
  delete copy.passwordConfirmation;
  return copy;
}

function model(resource: Resource) {
  return (prisma as unknown as Record<string, { [key: string]: (...args: unknown[]) => unknown }>)[
    PRISMA_MODELS[resource]
  ];
}

function buildWhere(filters?: Filter[]): Record<string, unknown> {
  if (!filters?.length) return {};
  const where: Record<string, unknown> = {};
  for (const f of filters) {
    if (f.operator === "eq") {
      where[f.field] = f.value;
    } else if (f.operator === "contains") {
      where[f.field] = { contains: f.value, mode: "insensitive" };
    }
  }
  return where;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  if (!RESOURCES.includes(resource as Resource)) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }
  const r = resource as Resource;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    const current = Math.max(1, parseInt(searchParams.get("current") ?? "1", 10) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get("pageSize") ?? "10", 10) || 10));
    const sorters: Sorter[] = JSON.parse(searchParams.get("sorters") ?? "[]");
    const filters: Filter[] = JSON.parse(searchParams.get("filters") ?? "[]");

    const orderBy = sorters.length
      ? sorters.map((s) => ({ [s.field]: s.order }))
      : [{ createdAt: "desc" }];

    const [total, rows] = await Promise.all([
      model(r).count({ where: buildWhere(filters) }),
      (model(r).findMany as (a: unknown) => Promise<unknown[]>)({
        where: buildWhere(filters),
        orderBy,
        skip: (current - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    return NextResponse.json({
      data: rows.map((row) => sanitize(r, row as Record<string, unknown>)),
      total,
    });
  }

  const isNumeric = NUMERIC_IDS[r];
  const row = await (model(r).findUnique as (a: unknown) => Promise<Record<string, unknown> | null>)({
    where: { id: isNumeric ? Number(id) : id },
  });
  if (!row) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ data: sanitize(r, row) });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  if (!RESOURCES.includes(resource as Resource)) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }
  const r = resource as Resource;
  const body = (await request.json()) as Record<string, unknown>;
  const variables = await hashPasswordIfNeeded(r, body);
  const row = await (model(r).create as (a: unknown) => Promise<Record<string, unknown>>)({
    data: parseDates(r, variables),
  });
  return NextResponse.json({ data: sanitize(r, row) });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  if (!RESOURCES.includes(resource as Resource)) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }
  const r = resource as Resource;
  const body = (await request.json()) as Record<string, unknown>;
  const variables = await hashPasswordIfNeeded(r, body);
  const isNumeric = NUMERIC_IDS[r];
  const row = await (model(r).update as (a: unknown) => Promise<Record<string, unknown>>)({
    where: { id: isNumeric ? Number(id) : id },
    data: parseDates(r, variables),
  });
  return NextResponse.json({ data: sanitize(r, row) });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  if (!RESOURCES.includes(resource as Resource)) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }
  const r = resource as Resource;
  const isNumeric = NUMERIC_IDS[r];
  const row = await (model(r).delete as (a: unknown) => Promise<Record<string, unknown>>)({
    where: { id: isNumeric ? Number(id) : id },
  });
  return NextResponse.json({ data: sanitize(r, row) });
}

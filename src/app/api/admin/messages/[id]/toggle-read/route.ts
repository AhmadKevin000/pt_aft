import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = (await request.json()) as { isRead?: boolean };
  if (typeof body.isRead !== "boolean") {
    return NextResponse.json({ error: "isRead boolean required" }, { status: 400 });
  }
  const row = await prisma.message.update({
    where: { id: Number(id) },
    data: { isRead: body.isRead },
  });
  return NextResponse.json({ data: row });
}

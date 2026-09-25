import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { signSession, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({ error: "Email dan password wajib diisi" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
  if (!user) {
    return NextResponse.json({ error: "Email atau password salah" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Email atau password salah" }, { status: 401 });
  }

  const token = await signSession({ sub: String(user.id), email: user.email, name: user.name });

  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return response;
}

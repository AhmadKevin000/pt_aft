import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "aft_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET missing or too short (min 32 chars)");
  }
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  sub: string;
  email: string;
  name: string;
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ email: payload.email, name: payload.name })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getSecret());
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (!payload.sub || typeof payload.email !== "string" || typeof payload.name !== "string") {
      return null;
    }
    return { sub: payload.sub, email: payload.email, name: payload.name };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true as const,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_TTL_SECONDS,
};

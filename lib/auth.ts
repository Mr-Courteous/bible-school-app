import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

export const SESSION_COOKIE_NAME = 'cpbc_admin_session';

// Set SESSION_SECRET in your environment for production — this fallback is dev-only.
const secret = new TextEncoder().encode(
  process.env.SESSION_SECRET || 'dev-only-change-me-in-env'
);

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(payload: { adminId: string; email: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { adminId: string; email: string };
  } catch {
    return null;
  }
}

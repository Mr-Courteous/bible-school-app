import { prisma } from './prisma';
import { hashPassword } from './auth';

export async function seedAdmin() {
  try {
    const existing = await prisma.admin.findFirst();
    if (existing) return; // already seeded — never overwrite a real admin

    const email = process.env.ADMIN_EMAIL || 'admin@christpatternbiblecollege.org';
    const password = process.env.ADMIN_PASSWORD || 'ChangeMe123!';

    await prisma.admin.create({
      data: {
        email,
        password: await hashPassword(password),
      },
    });

    console.log(`[seed-admin] Default admin account created: ${email}`);
    if (!process.env.ADMIN_PASSWORD) {
      console.warn(
        '[seed-admin] ADMIN_PASSWORD was not set in the environment — a default password was used. ' +
        'Set ADMIN_EMAIL and ADMIN_PASSWORD in your .env and change credentials immediately after first login.'
      );
    }
  } catch (err) {
    console.error('[seed-admin] Failed to seed admin account:', err);
  }
}

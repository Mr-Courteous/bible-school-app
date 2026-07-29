import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('[seed-admin.mjs] ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
  console.log('[seed-admin.mjs] ADMIN_PASSWORD present:', !!process.env.ADMIN_PASSWORD);

  const email = (process.env.ADMIN_EMAIL || 'admin@christpatternbiblecollege.org').trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'ChangeMe123!';
  const hashed = bcrypt.hashSync(password, 10);

  const existing = await prisma.admin.findFirst();
  if (existing) {
    await prisma.admin.update({
      where: { id: existing.id },
      data: { email, password: hashed },
    });
    console.log(`[seed-admin.mjs] Admin updated to: ${email}`);
    return;
  }

  await prisma.admin.create({
    data: { email, password: hashed },
  });

  console.log(`[seed-admin.mjs] Default admin account created: ${email}`);
}

main()
  .catch((e) => {
    console.error('[seed-admin.mjs] Error seeding admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

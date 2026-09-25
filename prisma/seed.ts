import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    console.error(`Error: environment variable ${name} wajib di-set untuk menjalankan seed.`);
    console.error(`Contoh: ${name}="nilai" npx tsx --env-file=.env prisma/seed.ts`);
    process.exit(1);
  }
  return value.trim();
}

async function main() {
  const email = requireEnv("SEED_ADMIN_EMAIL");
  const password = requireEnv("SEED_ADMIN_PASSWORD");

  if (password.length < 8) {
    console.error("Error: SEED_ADMIN_PASSWORD minimal 8 karakter.");
    process.exit(1);
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`User ${email} sudah ada, skip.`);
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { name: "Admin", email, password: hashed },
  });
  console.log(`Seed user admin dibuat: ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

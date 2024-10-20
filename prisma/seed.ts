import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createBusinessType() {
  const typeBusiness = await prisma.m002_BusinessType.createMany({
    data: [
      {
        name: "Food & Beverages",
      },
      {
        name: "Toko Retail",
      },
      {
        name: "Jasa",
      },
      {
        name: "Enterprise",
      },
    ],
  });

  return {
    typeBusiness,
  };
}

async function createRoles() {
  const roles = await prisma.m1001_Roles.createMany({
    data: [
      {
        roles_name: "Admin",
      },
      {
        roles_name: "Owner",
      },
      {
        roles_name: "Kasir",
      },
      {
        roles_name: "Staff",
      },
    ],
  });

  return {
    roles,
  };
}

async function main() {
  await createBusinessType();
  await createRoles();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

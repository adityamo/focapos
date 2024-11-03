import { PrismaClient } from "@prisma/client";
import { getJsonData } from "./utils";

const prisma = new PrismaClient();

interface BankData {
  name?: string;
  code?: string;
  type?: string;
}

async function createBank() {
  const data: BankData[] = await getJsonData("id-bank");

  const uMap = (i: BankData) => ({
    name: i.name || "",
    code: i.code || "",
    type: i.type || "", // Remove if not in the schema
  });

  for (const bank of data) {
    await prisma.m1002_DataBank.create({
      data: { ...uMap(bank) },
    });
  }
}

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
  await createBank();
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

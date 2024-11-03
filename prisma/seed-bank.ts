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

async function main() {
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

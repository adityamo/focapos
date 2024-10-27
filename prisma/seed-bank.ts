import { PrismaClient } from "@prisma/client";
import { getJsonData } from "./utils";

const prisma = new PrismaClient();

async function createRegion() {
  const data = await getJsonData("id-bank");
  const uMap = (i: { name?: string; code?: string }) => ({
    name: "".concat(i.name || ""),
    code: "".concat(i.code || ""),
    type: "",
    address: "",
  });

  for (const bank of data) {
    await prisma.m1002_DataBank.create({
      data: { ...uMap(bank) },
    });
  }
}

async function main() {
  await createRegion();
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

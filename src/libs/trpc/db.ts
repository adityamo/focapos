import { PrismaClient } from "@prisma/client";

type Global = typeof globalThis;

interface CustomGlobalNodeJs extends Global {
  prisma: PrismaClient;
}

declare const global: CustomGlobalNodeJs;

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = db;

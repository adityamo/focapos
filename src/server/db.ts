import { PrismaClient } from "@prisma/client";

type Global = typeof globalThis;

interface CustomGlobalNodeJs extends Global {
  prisma: PrismaClient;
}

declare const global: CustomGlobalNodeJs;

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

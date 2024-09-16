import { type Session, getServerSession } from "next-auth";
import { appRouter } from "@/server";
import { authOptions } from "@/libs/next-auth";
import { prisma } from "@/libs/trpc/db";

export async function createTRPCCaller(session?: Session | null) {
  return appRouter.createCaller({
    prisma,
    session:
      typeof session === "undefined"
        ? await getServerSession(authOptions)
        : session,
  });
}

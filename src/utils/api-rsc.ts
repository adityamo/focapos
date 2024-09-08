import { type Session, getServerSession } from "next-auth";
import { appRouter } from "@/server";
import { authOptions } from "@/libs/next-auth";
import { db } from "@/libs/trpc/db";

export async function createTRPCCaller(session?: Session | null) {
  return appRouter.createCaller({
    db,
    session:
      typeof session === "undefined"
        ? await getServerSession(authOptions)
        : session,
  });
}

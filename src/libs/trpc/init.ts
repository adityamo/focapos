import { initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getSession } from "next-auth/react";
// import prisma from "./db";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });
  return {
    session,
    // prisma,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;

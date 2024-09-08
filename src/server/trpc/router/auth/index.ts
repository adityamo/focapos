import { publicProcedure } from "@/libs/trpc";

export const getUser = publicProcedure.query(async () => {
  return "trpc running bro";
});

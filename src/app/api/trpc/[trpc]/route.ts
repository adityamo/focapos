import { authOptions } from "@/libs/next-auth/option";
import { createInnerTRPCContext } from "@/libs/trpc";
import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { getServerSession } from "next-auth";

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions);
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext() {
      return createInnerTRPCContext({ session });
    },
  });
};

export { handler as GET, handler as POST };

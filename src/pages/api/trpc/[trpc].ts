import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers/_app";

export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  return {
    req: opts.req,
    res: opts.res,
  };
};

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});

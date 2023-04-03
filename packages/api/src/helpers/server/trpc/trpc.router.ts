
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc.context.";
import { router } from "./trpc.helper";
import { xxxxxxxxxxxxRouter } from "../../../entities/xxxxxxxxxxxx/xxxxxxxxxxxx.controller";
import { expressHandler } from "trpc-playground/handlers/express";
import { renderTrpcPanel } from "trpc-panel";
import { configs } from "../../configs/configs";
import { Request, Response } from "express";

// =================================================================

export const appRouter = router({
    xxxxxxxxxxxx: xxxxxxxxxxxxRouter,
});

// =================================================================

export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});

// =================================================================

export const trpcDocsMiddleware = (_: Request, res: Response) => {
  return res.send(renderTrpcPanel(appRouter, { url: configs.API_URL }));
};

// =================================================================

export const trpcPlaygroundMiddleware = async () =>
  await expressHandler({
    trpcApiEndpoint: "/trpc",
    playgroundEndpoint: "/playground",
    router: appRouter,
  });

// =================================================================

export type AppRouter = typeof appRouter;
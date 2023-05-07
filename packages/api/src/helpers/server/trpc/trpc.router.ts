
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc.context.";
import { router } from "./trpc.helper";
import { userRouter } from "../../../entities/user/user.controller";
import { serviceRouter } from "../../../entities/service/service.controller";
import { gasStationRouter } from "../../../entities/gasStation/gasStation.controller";
import { transactionRouter } from "../../../entities/transaction/transaction.controller";
import { expressHandler } from "trpc-playground/handlers/express";
import { renderTrpcPanel } from "trpc-panel";
import { configs } from "../../configs/configs";
import { Request, Response } from "express";

// =================================================================

export const appRouter = router({
    user: userRouter,
    service: serviceRouter,
    gasStation: gasStationRouter,
    transaction: transactionRouter,
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
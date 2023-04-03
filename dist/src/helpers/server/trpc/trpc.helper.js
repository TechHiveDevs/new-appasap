"use strict";
/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.publicProcedure = exports.mergeRouters = exports.middleware = void 0;
// -------------------------------------------------
const server_1 = require("@trpc/server");
// import superjson from 'superjson'
// -------------------------------------------------
const t = server_1.initTRPC.context().create({
    /**
     * @see https://trpc.io/docs/v10/data-transformers
     */
    // transformer: superjson,
    /**
     * @see https://trpc.io/docs/v10/error-formatting
     */
    errorFormatter({ shape }) {
        return shape;
    },
});
// -------------------------------------------------
/**
 * @see https://trpc.io/docs/v10/middlewares
 **/
exports.middleware = t.middleware;
// -------------------------------------------------
/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
exports.mergeRouters = t.mergeRouters;
// -------------------------------------------------
/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
exports.publicProcedure = t.procedure;
// -------------------------------------------------
/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 **/
exports.router = t.router;
// -------------------------------------------------
// export tye AppRouter = typeof router

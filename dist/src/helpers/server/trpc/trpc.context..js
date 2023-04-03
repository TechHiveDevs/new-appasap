"use strict";
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import * as trpc from '@trpc/server'
// import * as trpcNext from '@trpc/server/adapters/next'
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const createContext = ({ req, res }) => ({
    req,
    res,
});
exports.createContext = createContext;

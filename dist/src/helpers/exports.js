"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.appRouter = void 0;
var trpc_router_1 = require("./server/trpc/trpc.router");
Object.defineProperty(exports, "appRouter", { enumerable: true, get: function () { return trpc_router_1.appRouter; } });
var trpc_context_1 = require("./server/trpc/trpc.context.");
Object.defineProperty(exports, "createContext", { enumerable: true, get: function () { return trpc_context_1.createContext; } });

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpcPlaygroundMiddleware = exports.trpcDocsMiddleware = exports.trpcMiddleware = exports.appRouter = void 0;
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
const trpc_context_1 = require("./trpc.context.");
const trpc_helper_1 = require("./trpc.helper");
const test_controller_1 = require("../../../entities/test/test.controller");
const express_1 = require("trpc-playground/handlers/express");
const trpc_panel_1 = require("trpc-panel");
const configs_1 = require("../../configs/configs");
// =================================================================
exports.appRouter = (0, trpc_helper_1.router)({
    test: test_controller_1.testRouter,
});
// =================================================================
exports.trpcMiddleware = trpcExpress.createExpressMiddleware({
    router: exports.appRouter,
    createContext: trpc_context_1.createContext,
});
// =================================================================
const trpcDocsMiddleware = (_, res) => {
    return res.send((0, trpc_panel_1.renderTrpcPanel)(exports.appRouter, { url: configs_1.configs.API_URL }));
};
exports.trpcDocsMiddleware = trpcDocsMiddleware;
// =================================================================
const trpcPlaygroundMiddleware = async () => await (0, express_1.expressHandler)({
    trpcApiEndpoint: "/trpc",
    playgroundEndpoint: "/playground",
    router: exports.appRouter,
});
exports.trpcPlaygroundMiddleware = trpcPlaygroundMiddleware;

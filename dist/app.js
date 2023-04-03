"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchWebServer = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const dotenv_expand_1 = __importDefault(require("dotenv-expand"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma_helper_1 = require("./src/helpers/database/prisma-helpers/prisma.helper");
const configs_1 = require("./src/helpers/configs/configs");
const trpc_router_1 = require("./src/helpers/server/trpc/trpc.router");
// ====================================================
// Set Environment Variables
const env = dotenv_1.default.config();
dotenv_expand_1.default.expand(env);
// ====================================================
async function launchWebServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use('/trpc', trpc_router_1.trpcMiddleware);
    app.use('/playground', await (0, trpc_router_1.trpcPlaygroundMiddleware)());
    app.use('/panel', trpc_router_1.trpcDocsMiddleware);
    app.listen(configs_1.configs.API_PORT, () => {
        console.log(`Server is on fire & listening on port ${configs_1.configs.API_PORT} 🔥`);
    });
}
exports.launchWebServer = launchWebServer;
// ====================================================
async function main() {
    await (0, prisma_helper_1.connectDatabase)();
    //await connectCacheDatabase()
    launchWebServer();
}
// ====================================================
main();

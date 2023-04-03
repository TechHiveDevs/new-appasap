"use strict";
/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.prisma = void 0;
// -----------------------------------------------
const client_1 = require("@prisma/client");
const prismaGlobal = global;
// -----------------------------------------------
exports.prisma = prismaGlobal.prisma ||
    new client_1.PrismaClient({
    // log: ['query'],
    // log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
// -----------------------------------------------
const connectDatabase = async () => {
    try {
        await exports.prisma.$connect();
        console.log('Connected to Database Successfully ! 🗄');
    }
    catch (error) {
        console.error("Can't connect to database");
        console.error({ error });
    }
};
exports.connectDatabase = connectDatabase;
// -----------------------------------------------
// if (env.NODE_ENV !== 'production') {
//   prismaGlobal.prisma = prisma
// }

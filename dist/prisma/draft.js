"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query'] });
async function draft() {
    const result = await prisma.$queryRaw `SELECT * FROM User;`;
    console.log({ result });
}
draft();

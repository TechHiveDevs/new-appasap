import { PrismaClient, Prisma } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient({ log: ['query'] })

async function draft() {
  const result = await prisma.$queryRaw`SELECT * FROM User;`
  console.log({ result })
}

draft()

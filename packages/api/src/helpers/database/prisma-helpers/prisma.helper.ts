/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */

// -----------------------------------------------

import { PrismaClient } from '@prisma/client'

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient
}

// -----------------------------------------------

export const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    // log: ['query'],
    // log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

// -----------------------------------------------

export const connectDatabase = async () => {
  try {
    await prisma.$connect()
    console.log('Connected to Database Successfully ! 🗄')
  } catch (error: any) {
    console.error("Can't connect to database")
    console.error({ error })
  }
}

// -----------------------------------------------

// if (env.NODE_ENV !== 'production') {
//   prismaGlobal.prisma = prisma
// }

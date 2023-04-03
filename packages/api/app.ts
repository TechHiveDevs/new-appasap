import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import express from 'express'
import cors from 'cors'
import { connectDatabase } from './src/helpers/database/prisma-helpers/prisma.helper'
import { connectCacheDatabase } from './src/helpers/cache/redis-helpers/redis.helper'
import { configs } from './src/helpers/configs/configs'
import {
  trpcMiddleware,
  trpcDocsMiddleware,
  trpcPlaygroundMiddleware,
} from './src/helpers/server/trpc/trpc.router'

// ====================================================

// Set Environment Variables
const env = dotenv.config()
dotenvExpand.expand(env)

// ====================================================

export async function launchWebServer() {
  const app = express()
  app.use(cors())
  app.use('/trpc', trpcMiddleware)
  app.use('/playground', await trpcPlaygroundMiddleware())
  app.use('/panel', trpcDocsMiddleware)
  app.listen(configs.API_PORT, () => {
    console.log(`Server is on fire & listening on port ${configs.API_PORT} 🔥`)
  })
}

// ====================================================

async function main() {
  await connectDatabase()
  //await connectCacheDatabase()
  launchWebServer()
}

// ====================================================

main()

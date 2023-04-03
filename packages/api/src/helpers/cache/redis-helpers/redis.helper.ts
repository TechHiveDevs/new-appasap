import { createClient } from 'redis'
import { configs } from '../../configs/configs'

// -----------------------------------------------

export const redis = createClient({ password: configs.CACHE_PASSWORD })

// -----------------------------------------------

export const connectCacheDatabase = async () => {
  try {
    redis.on('error', (err: any) => {
      console.error('Redis Client Error', err)
    })
    await redis.connect()
    // await redis.hSet('users', dumpUser.id.toString(), JSON.stringify(dumpUser))
    // const cachedUser = await redis.hGet('users', dumpUser.id.toString())
    // console.log({ cachedUser: JSON.parse(cachedUser as any) })
    console.log('Connected to Cache Database Successfully ! 🗄')
  } catch (error: any) {
    console.error("Can't connect to cache database")
    console.error({ error })
  }
}

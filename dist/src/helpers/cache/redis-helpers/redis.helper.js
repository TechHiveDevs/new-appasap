"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectCacheDatabase = exports.redis = void 0;
const redis_1 = require("redis");
const configs_1 = require("../../configs/configs");
// -----------------------------------------------
exports.redis = (0, redis_1.createClient)({ password: configs_1.configs.CACHE_PASSWORD });
// -----------------------------------------------
const connectCacheDatabase = async () => {
    try {
        exports.redis.on('error', (err) => {
            console.error('Redis Client Error', err);
        });
        await exports.redis.connect();
        // await redis.hSet('users', dumpUser.id.toString(), JSON.stringify(dumpUser))
        // const cachedUser = await redis.hGet('users', dumpUser.id.toString())
        // console.log({ cachedUser: JSON.parse(cachedUser as any) })
        console.log('Connected to Cache Database Successfully ! 🗄');
    }
    catch (error) {
        console.error("Can't connect to cache database");
        console.error({ error });
    }
};
exports.connectCacheDatabase = connectCacheDatabase;

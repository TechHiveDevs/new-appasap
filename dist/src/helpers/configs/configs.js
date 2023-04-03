"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const ENV = process.env.NODE_ENV || 'development';
// ===========================================
const configsEnv = {
    development: {
        API_URL: process.env.API_URL || 'http://localhost:5000/trpc',
        API_PORT: process.env.API_PORT || '5000',
        API_PLAYGROUND: process.env.API_PLAYGROUND || '',
        CLIENT_URL: process.env.CLIENT_URL || '3000',
        CACHE_PORT: process.env.CACHE_PORT || '6379',
        CACHE_PASSWORD: process.env.CACHE_PASSWORD || '',
    },
    production: {
        API_URL: process.env.API_URL || 'http://localhost:5000/trpc',
        API_PORT: process.env.API_PORT || '5000',
        API_PLAYGROUND: process.env.API_PLAYGROUND || '',
        CLIENT_URL: process.env.CLIENT_URL || '3000',
        CACHE_PORT: process.env.CACHE_PORT || '6379',
        CACHE_PASSWORD: process.env.CACHE_PASSWORD || '',
    },
};
// ===========================================
// @ts-ignore
exports.configs = configsEnv[ENV];

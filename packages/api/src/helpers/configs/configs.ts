const ENV: any = process.env.NODE_ENV || 'development'

// ==========================================

type ConfigsType = {
  API_URL: string
  API_PORT: string
  API_PLAYGROUND: string
  CLIENT_URL: string
  CACHE_PORT: string
  CACHE_PASSWORD: string
}

// ===========================================

const configsEnv: {
  development: ConfigsType
  production: ConfigsType
} = {
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
}

// ===========================================

// @ts-ignore
export const configs: ConfigsType = configsEnv[ENV]

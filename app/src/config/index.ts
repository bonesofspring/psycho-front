import * as process from 'process'

import type { TOrigins } from '@/types'

const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || 'dev'

export const IS_PROD_ENV = APP_ENV === 'prod'
export const IS_STAGE_ENV = APP_ENV === 'stage'
export const IS_DEV_ENV = APP_ENV === 'dev'

export const IS_API_MOCKING_ENABLED = process.env.NEXT_PUBLIC_IS_API_MOCKING_ENABLED === '1'

export const IS_LOGOUT_REDIRECT_ENABLED = process.env.NEXT_PUBLIC_IS_LOGOUT_REDIRECT_ENABLED === '1'

const localOrigin = ''

export const APP_ORIGINS: TOrigins = IS_API_MOCKING_ENABLED
  ? {
      apiOrigin: localOrigin,
    }
  : {
      apiOrigin: process.env.NEXT_PUBLIC_API_HOST || 'API_ORIGIN',
    }

export const SENTRY_CLIENT_DSN = process.env.NEXT_PUBLIC_SENTRY_CLIENT_DSN || 'SENTRY_CLIENT_DSN'
export const SENTRY_SERVER_DSN = process.env.SENTRY_SERVER_DSN || 'SENTRY_SERVER_DSN'

export const APP_BASE_PATH = process.env.NEXT_PUBLIC_APP_BASE_PATH || ''

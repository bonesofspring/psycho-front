declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IS_ANALYZE_MODE_ON: '1' | '0'
      IS_REACT_STRICT_MODE_ON: '1' | '0'
      NEXT_PUBLIC_APP_ENV: 'prod' | 'stage' | 'dev'
      NEXT_PUBLIC_IS_API_MOCKING_ENABLED: '1' | '0'
      NEXT_PUBLIC_IS_LOGOUT_REDIRECT_ENABLED: '1' | '0'
      NEXT_PUBLIC_API_HOST: string
      SENTRY_SERVER_DSN: string
    }
  }
}

export {}

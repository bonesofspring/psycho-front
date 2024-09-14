import withLinaria from 'next-with-linaria'
import { patchWebpackConfig } from 'next-global-css'
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { DeleteSourceMapsPlugin } from 'webpack-delete-sourcemaps-plugin'

const isAnalyzeEnabled = process.env.IS_ANALYZE_MODE_ON === '1'
const isReactStrictModeOn = process.env.IS_REACT_STRICT_MODE_ON === '1'

const nextConfig = {
  reactStrictMode: isReactStrictModeOn,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_IS_API_MOCKING_ENABLED: process.env.NEXT_PUBLIC_IS_API_MOCKING_ENABLED,
    NEXT_PUBLIC_IS_LOGOUT_REDIRECT_ENABLED: process.env.NEXT_PUBLIC_IS_LOGOUT_REDIRECT_ENABLED,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    SENTRY_SERVER_DSN: process.env.SENTRY_SERVER_DSN,
  },
  basePath: process.env.NEXT_PUBLIC_APP_BASE_PATH,
  webpack: (config, { isServer }) => {
    if (isAnalyzeEnabled) {
      config.plugins.push(
        // eslint-disable-next-line new-cap
        new StatoscopeWebpackPlugin.default({
          saveReportTo: './.next/report-[name]-[hash].html',
          saveStatsTo: './.next/stats-[name]-[hash].json',
        }),
      )
    }

    config.plugins.push(new DeleteSourceMapsPlugin())

    /* eslint-disable-next-line no-param-reassign */
    config.experiments = { ...config.experiments, topLevelAwait: true }

    return patchWebpackConfig(config, { isServer })
  },
}

const config = () => {
  const finalConfig =
    process.env.NEXT_PUBLIC_APP_ENV === 'dev'
      ? {
          ...nextConfig,
          headers: async () => [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'Service-Worker-Allowed',
                  value: '/',
                },
              ],
            },
          ],
        }
      : {
          ...nextConfig,
          output: 'export',
        }

  const plugins = [withLinaria, withBundleAnalyzer({ enabled: isAnalyzeEnabled })]

  return plugins.reduce((acc, plugin) => plugin(acc), finalConfig)
}

export default config

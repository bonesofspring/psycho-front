import axios, { type AxiosInstance } from 'axios'

import type { TAuthHeaderData } from '@/types'

import { APP_BASE_PATH } from '@/config'

interface IInitProps {
  baseUrl: string
  authHeaderData?: TAuthHeaderData
}

export const initAxiosClient = ({ baseUrl, authHeaderData }: IInitProps): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: !!authHeaderData?.withCredentials,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  if (!authHeaderData) {
    return axiosInstance
  }

  const {
    headerName,
    headerPrefix,
    doRefreshAccessToken,
    getAccessToken,
    getRefreshToken,
    logout,
  } = authHeaderData

  const refreshAccessToken = async () => {
    if (typeof getRefreshToken === 'function') {
      const refreshToken = getRefreshToken()

      if (!refreshToken && typeof logout === 'function') {
        logout()
      }
    }

    try {
      await doRefreshAccessToken(axiosInstance)
    } catch {
      if (typeof logout === 'function') {
        logout()
      }
    }
  }

  axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = getAccessToken()

    // eslint-disable-next-line no-param-reassign
    config.headers[headerName] = headerPrefix ? `${headerPrefix} ${accessToken}` : accessToken

    return config
  })

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config

      if (error.response.status === 404 && window.location.pathname !== '/404') {
        window.location.assign(`${APP_BASE_PATH}/404`)
      }

      if (error.response.status === 401 && !originalRequest.retry) {
        originalRequest.retry = true

        await refreshAccessToken()

        const accessToken = getAccessToken()
        originalRequest.headers[headerName] = headerPrefix
          ? `${headerPrefix} ${accessToken}`
          : accessToken

        return axiosInstance(originalRequest)
      }

      throw error
    },
  )

  return axiosInstance
}

import type { AxiosInstance } from 'axios'

export type TAuthHeaderData = {
  headerName: string
  headerPrefix: string
  withCredentials?: boolean
  doRefreshAccessToken: (axiosInstance: AxiosInstance) => Promise<void>
  getAccessToken: () => string | null
  getRefreshToken?: () => string | null
  logout?: (isReturnDisabled?: boolean) => void
}

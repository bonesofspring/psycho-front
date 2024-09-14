import { initAxiosClient } from '@/lib/clients/AxiosClient'
import { APP_ORIGINS } from '@/config'

const baseUrl = `${APP_ORIGINS.apiOrigin}/`

export const ApiClient = initAxiosClient({ baseUrl })

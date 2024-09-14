import { ApiClient } from '@/api/clients/ApiClient'
import { formatUser } from '@/api/services/ApiService/UserProfile/dto'
import { AUTH_ENDPOINT, USER_PROFILE_ENDPOINT } from '@/api/services/ApiService/endpoints'
import { type ILogInProps } from '@/api/services/ApiService/UserProfile/requestTypes'
import { type TUserProfileResponse } from '@/api/services/ApiService/UserProfile/responseTypes'
import { type TUserProfile } from '@/types'

export const ApiService = {
  fetchProfile: async () => {
    const response = await ApiClient.get(USER_PROFILE_ENDPOINT)

    return formatUser(response.data)
  },
  logIn: async (data: ILogInProps): Promise<TUserProfile | null> => {
    const url = AUTH_ENDPOINT

    window.localStorage.setItem('token', '')

    const response = await ApiClient.post<ILogInProps, TUserProfileResponse>(url, {
      method: 'POST',
      body: data,
    })

    return formatUser(response)
  },
}

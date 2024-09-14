import type { TError, TLoadingStatus } from '@/store/types'
import type { TUserProfile } from '@/types'

export type TUserData = {
  user: TUserProfile | null
  loadingStatus: TLoadingStatus
  error: TError
}

export type TUserProfileState = {
  userData: TUserData
}

import { createSelector } from '@reduxjs/toolkit'

import { isProfileLoadedSelector } from '@/store/slices/UserProfile'

export const isUserInfoLoadedSelector = createSelector(
  [isProfileLoadedSelector],
  (isProfileLoaded) => isProfileLoaded,
)

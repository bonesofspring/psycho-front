import { createListenerMiddleware, isAnyOf, type TypedStartListening } from '@reduxjs/toolkit'

import type { TAppDispatch, TRootState } from '@/store'

import { fetchProfile } from '@/store/slices/UserProfile'

export const UserProfileMiddleware = createListenerMiddleware()
const startAppListening = UserProfileMiddleware.startListening as TypedStartListening<
  TRootState,
  TAppDispatch
>

startAppListening({
  matcher: isAnyOf(fetchProfile.fulfilled),
  effect: async () => {},
})

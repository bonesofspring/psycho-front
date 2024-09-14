import { combineReducers } from '@reduxjs/toolkit'

import { userProfileSlice } from '@/store/slices/UserProfile'
import { notificationsSlice } from '@/store/slices/_complexSlices/Notifications'

export const rootReducer = combineReducers({
  userProfile: userProfileSlice.reducer,
  notifications: notificationsSlice.reducer,
})

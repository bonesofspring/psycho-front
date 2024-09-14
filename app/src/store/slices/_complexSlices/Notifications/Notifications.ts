import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { TNotification } from '@/types'
import type { TNotificationState } from './types'

import { fetchProfile } from '@/store/slices/UserProfile'

const initialState: TNotificationState = {
  notifications: [],
}

type TState = typeof initialState

interface IRootState {
  notifications: TState
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(draft, action: PayloadAction<TNotification>) {
      draft.notifications.push(action.payload)
    },
    clearNotifications(draft) {
      draft.notifications = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.rejected, (draft) => {
      draft.notifications.push({
        type: 'error',
        message: 'Не удалось загрузить профиль пользователя',
      })
    })
  },
})

export const { addNotification, clearNotifications } = notificationsSlice.actions

export const notificationsSelector = (state: IRootState) => state.notifications.notifications

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootReducer } from '@/store/reducers'
import { UserProfileMiddleware } from '@/store/middleware/UserProfileMiddleware'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(UserProfileMiddleware.middleware),

  devTools: process.env.NODE_ENV !== 'production',
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<TAppDispatch>()

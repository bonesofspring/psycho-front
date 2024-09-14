import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { TUserProfileState } from '@/store/slices/UserProfile/types'
import type { TUserProfile } from '@/types'

import { ApiService } from '@/api'

export const fetchProfile = createAsyncThunk('profile/fetchProfile', ApiService.fetchProfile)

export const logIn = createAsyncThunk<
  TUserProfile | null,
  { email: string; password: string },
  { state: IRootState }
>('profile/logIn', async ({ email, password }) => ApiService.logIn({ email, password }))

const initialState: TUserProfileState = {
  userData: {
    user: null,
    loadingStatus: 'idle',
    error: {
      message: '',
      code: null,
    },
  },
}

export type TState = typeof initialState

interface IRootState {
  userProfile: TState
}

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    resetProfileState() {
      return initialState
    },
    logoutUser() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (draft) => {
        draft.userData.error.message = ''
        draft.userData.loadingStatus = 'loading'
      })
      .addCase(fetchProfile.fulfilled, (draft, action) => {
        draft.userData.loadingStatus = 'completed'
        draft.userData.user = action.payload

        if (
          !draft.userData?.user?.name &&
          !draft.userData?.user?.surname &&
          window.location.pathname !== '/404'
        ) {
          window.location.assign('/')
        }
      })
      .addCase(fetchProfile.rejected, (draft) => {
        draft.userData.error.message = 'error'
        draft.userData.loadingStatus = 'failed'
      })
  },
})

export const { logoutUser } = userProfileSlice.actions

export const isProfileLoadingSelector = (state: IRootState) =>
  state.userProfile.userData.loadingStatus === 'loading'

export const isProfileLoadedSelector = (state: IRootState) =>
  state.userProfile.userData.loadingStatus === 'completed' ||
  state.userProfile.userData.loadingStatus === 'failed'

export const userProfileSelector = (state: IRootState) => state.userProfile.userData.user

export const userIdSelector = (state: IRootState) => state.userProfile.userData.user?.id || -1

export const isAuthorizedSelector = (state: IRootState) => !!state.userProfile.userData.user?.id

export const userLoadingStatusSelector = (state: IRootState) =>
  state.userProfile.userData.loadingStatus

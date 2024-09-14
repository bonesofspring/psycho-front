import { http, HttpResponse } from 'msw'

import { USER_PROFILE_ENDPOINT } from '@/api'

import { userProfileResponse } from './data'

export const userProfileHandlers = [
  http.get(`/${USER_PROFILE_ENDPOINT}`, () => HttpResponse.json(userProfileResponse)),
]

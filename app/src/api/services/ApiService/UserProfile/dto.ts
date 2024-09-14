import type { TUserProfile } from '@/types'
import type { TUserProfileResponse } from './responseTypes'

const formatInitials = (name: string | null, surname: string | null): string => {
  if (!name && !surname) {
    return 'А'
  }

  const firstInitial = name?.[0] ?? ''
  const secondInitial = surname?.[0] ?? ''

  return `${firstInitial}${secondInitial}`
}

const formatNameAndShortSurname = (name: string | null, surname: string | null): string => {
  if (!name && !surname) {
    return 'Аноним А.'
  }

  const lastnameInitial = surname ? `${surname[0]}.` : ''

  return `${name} ${lastnameInitial}`
}

const formatNameAndSurname = (name: string | null, surname: string | null): string =>
  name && surname ? `${name} ${surname}` : 'Аноним Аноним'

export const formatUser = (userResponse: TUserProfileResponse): TUserProfile | null => {
  if (!userResponse) {
    return null
  }

  return {
    id: userResponse.userId,
    phone: userResponse.phone,
    name: userResponse.firstName ?? '',
    surname: userResponse.lastName ?? '',
    patronymic: userResponse.middleName ?? '',
    nameAndSurname: formatNameAndSurname(userResponse.firstName, userResponse.lastName),
    nameAndShortSurname: formatNameAndShortSurname(userResponse.firstName, userResponse.lastName),
    initials: formatInitials(userResponse.firstName, userResponse.lastName),
    avatarSrc: '',
    email: userResponse.email ?? '',
  }
}

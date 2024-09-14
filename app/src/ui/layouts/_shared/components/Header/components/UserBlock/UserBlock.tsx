import Avatar from '@mui/joy/Avatar'
import { useSelector } from 'react-redux'

import { userProfileSelector } from '@/store/slices/UserProfile'

import * as s from './styles'

export const UserBlock = () => {
  const user = useSelector(userProfileSelector)

  return (
    <s.Container>
      <s.Info>
        <s.FullName>
          {user?.name} {user?.surname}
        </s.FullName>
      </s.Info>

      <Avatar alt={user?.initials || ''} size="sm" />
    </s.Container>
  )
}

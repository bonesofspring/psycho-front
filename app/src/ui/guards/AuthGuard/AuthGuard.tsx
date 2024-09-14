import { useEffect, type ReactNode } from 'react'

import { useAppDispatch } from '@/store'
import { fetchProfile } from '@/store/slices/UserProfile'

interface IProps {
  children: ReactNode
}

export const AuthGuard = ({ children }: IProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch])

  return children
}

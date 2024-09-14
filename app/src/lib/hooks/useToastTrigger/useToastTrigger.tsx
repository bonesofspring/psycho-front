import { useEffect } from 'react'

import type { TNotification } from '@/types'

interface IToastTrigger {
  notifications: TNotification[]
  onClear: () => void
}

export const useToastTrigger = ({ notifications, onClear }: IToastTrigger) => {
  useEffect(() => {
    if (notifications.length) {
      notifications?.forEach((notification) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const iconName = notification.type === 'success' ? 'check' : 'alert'

        // TODO: добавить тут вызов тоста
      })

      onClear()
    }
  }, [notifications, onClear])

  return null
}

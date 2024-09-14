import { useSelector } from 'react-redux'
import Snackbar from '@mui/material/Snackbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { useToastTrigger } from '@/lib/hooks/useToastTrigger'
import { useAppDispatch } from '@/store'
import {
  clearNotifications,
  notificationsSelector,
} from '@/store/slices/_complexSlices/Notifications'

export const NotificationsContainer = () => {
  const dispatch = useAppDispatch()
  const notifications = useSelector(notificationsSelector)

  const handleClearNotifications = () => {
    dispatch(clearNotifications())
  }

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClearNotifications}>
        UNDO
      </Button>
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={handleClearNotifications}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  useToastTrigger({ notifications, onClear: handleClearNotifications })

  return (
    <Snackbar
      action={action}
      autoHideDuration={6000}
      message="Test toast"
      open={false}
      onClose={handleClearNotifications}
    />
  )
}

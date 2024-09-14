/**
 * Сообщение для показа в тосте
 */
export type TNotification = {
  /** Тип сообщения */
  type: 'success' | 'error'
  /** Текст сообщения */
  message: string
}

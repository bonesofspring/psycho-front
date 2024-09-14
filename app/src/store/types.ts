export type TLoadingStatus = 'idle' | 'loading' | 'completed' | 'failed'

export type TError = {
  code: number | null
  message: string
}

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useRouterReady = () => {
  const router = useRouter()
  const [isRouterReady, setIsRouterReady] = useState<boolean>(false)

  useEffect(() => {
    if (router.isReady) {
      setIsRouterReady(true)
    }
  }, [router.isReady])

  return { router, isRouterReady }
}

'use client'

import { useState, useEffect } from 'react'
import { debounce } from 'throttle-debounce'

type TUseScroll = {
  scrollY: number
  scrollX: number
  scrollDirection: string
}

export const useScroll = (): TUseScroll => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    scrollY: 0,
    scrollX: 0,
    scrollDirection: '',
  })

  useEffect(() => {
    const scrollListener = () => {
      setState((prevState) => {
        const prevLastScrollTop = prevState.lastScrollTop

        return {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          scrollDirection: prevLastScrollTop > -window.scrollY ? 'down' : 'up',
          lastScrollTop: -window.scrollY,
        }
      })
    }

    document.addEventListener('scroll', debounce(10, scrollListener))

    return () => {
      document.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  }
}

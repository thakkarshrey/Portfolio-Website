import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export function useAnimate(delay = 0) {
  const { pathname } = useLocation()
  const [animationClass, setAnimationClass] = useState('')
  useEffect(() => {
    setAnimationClass('')
    const timeout = setTimeout(() => {
      setAnimationClass('show-animation')
    }, delay)

    return () => clearTimeout(timeout)
  }, [pathname, delay])

  return animationClass
}

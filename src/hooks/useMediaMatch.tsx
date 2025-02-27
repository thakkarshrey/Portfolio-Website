import { useEffect, useState } from 'react'

export function useMediaMatch(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(query)
    const changeFn = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    mediaQueryList.addEventListener('change', changeFn)

    return () => {
      mediaQueryList.removeEventListener('change', changeFn)
    }
  }, [query])

  return matches
}

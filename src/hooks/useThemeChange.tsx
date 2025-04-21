import { useEffect, useRef, useState } from 'react'

const useThemeChange = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('mode') || 'light')

  const changeTheme = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('mode', selectedTheme)
    document.documentElement.setAttribute('data-theme', selectedTheme)

    if (inputRef.current) inputRef.current.checked = selectedTheme === 'dark'
  }, [selectedTheme])

  return { ref: inputRef, changeTheme, selectedTheme }
}

export default useThemeChange

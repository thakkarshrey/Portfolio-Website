import { useEffect, useRef, useState } from 'react'
import BackgroundWithCanvas from '../components/common/background-with-canvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes'
import './App.css'

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('mode') || 'light')

  useEffect(() => {
    localStorage.setItem('mode', selectedTheme)
    document.documentElement.setAttribute('data-theme', selectedTheme)

    if (inputRef.current) {
      inputRef.current.checked = selectedTheme === 'dark'
    }
  }, [selectedTheme])

  return (
    <BackgroundWithCanvas>
      <div className="toggle-container">
        <input
          ref={inputRef}
          type="checkbox"
          id="toggle-container_btn"
          onChange={() => setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')}
        />
        <label htmlFor="toggle-container_btn" className="toggle-container_label">
          <div className="toggle-container_label-sun">
            <FontAwesomeIcon icon={faSun} fontSize="20" />
          </div>
          <div className="toggle-container_label-moon">
            <FontAwesomeIcon icon={faMoon} fontSize="20" />
          </div>
        </label>
      </div>
      <RouterProvider router={createBrowserRouter(routes)} />
    </BackgroundWithCanvas>
  )
}

export default App

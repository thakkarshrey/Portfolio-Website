import BackgroundWithCanvas from '../components/common/background-with-canvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes'
import useThemeChange from '../hooks/useThemeChange'
import './App.css'

const App = () => {
  const { ref, changeTheme } = useThemeChange()

  return (
    <BackgroundWithCanvas>
      <div className="toggle-container">
        <input ref={ref} type="checkbox" id="toggle-container_btn" onChange={changeTheme} />
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

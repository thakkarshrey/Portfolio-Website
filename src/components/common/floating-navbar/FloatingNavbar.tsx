import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { sidebarUtils } from '../../../utils/sidebarUtils'
import './FloatingNavbar.css'

const FloatingNavbar = () => {
  const location = useLocation()
  const menu = sidebarUtils()
  const [currentElementId, setCurrentElementId] = useState(menu[0].id)

  useEffect(() => {
    const pathname_arr = location.pathname.split('/')
    const pathname = pathname_arr[1]
    if (currentElementId === pathname) return

    setCurrentElementId(pathname)

    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <div id="floating-navbar">
      <ul className="floating-navbar__menu">
        {menu?.map(
          (element: { id: string; link: string; title: string; icon: React.ReactElement }) => {
            return (
              <li
                key={element.id}
                className={`floating-navbar__list-item ${element.id === currentElementId ? 'floating-navbar--active-tab' : ''}`}
                onClick={() => setCurrentElementId(element.id)}
              >
                <NavLink to={element.link}>
                  <span className="floating-navbar__icon">{element.icon} </span>
                </NavLink>
              </li>
            )
          }
        )}
        <div className="floating-navbar__indicator"></div>
      </ul>
    </div>
  )
}

export default FloatingNavbar

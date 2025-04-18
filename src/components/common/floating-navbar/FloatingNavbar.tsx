import { useState } from 'react'
import { NavLink } from 'react-router'
import { sidebarUtils } from '../../../utils/sidebarUtils'
import './FloatingNavbar.css'

const FloatingNavbar = () => {
  const menu = sidebarUtils()
  const [currentElementLink, setCurrentElementLink] = useState(menu[0].link)

  return (
    <div id="floating-navbar">
      <ul className="floating-navbar__menu">
        {menu?.map(
          (element: { id: number; link: string; title: string; icon: React.ReactElement }) => {
            return (
              <li
                key={element.id}
                className={`floating-navbar__list-item ${element.link === currentElementLink ? 'floating-navbar--active-tab' : ''}`}
                onClick={() => setCurrentElementLink(element.link)}
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

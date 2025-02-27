 
import { faPalette, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './ThemeChanger.css'

const ThemeChanger = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false)

  const handleThemeChangerToggleClicked = () => {
    setIsToggleClicked((prevValue) => !prevValue)
  }
  return (
    <div className={`theme-changer ${isToggleClicked ? 'active' : ''}`}>
      <ul className={`theme-changer__menu ${isToggleClicked ? 'active' : ''}`}>
        <div className="theme-changer__toggle" onClick={handleThemeChangerToggleClicked}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <li style={{ '--i': 0, '--color': '#ff2927' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 1, '--color': '#fee800' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 2, '--color': '#04fc43' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 3, '--color': '#fe00f1' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 4, '--color': '#00b0fe' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 5, '--color': '#fea600' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 6, '--color': '#af29ff' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
        <li style={{ '--i': 7, '--color': '#01bdab' } as React.CSSProperties}>
          <a href="#">
            <FontAwesomeIcon icon={faPalette} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ThemeChanger

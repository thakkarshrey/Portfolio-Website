import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../box'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router'
import { sidebarUtils } from '../../../utils/sidebarUtils'
import { socialMediaLinkUtils } from '../../../utils/socialMediaLinkUtils'
import './Footer.css'

const Footer = () => {
  const menu = sidebarUtils()
  const socialMediaMenu = socialMediaLinkUtils()

  return (
    <footer id="footer">
      <Box>
        <div className="footer-container">
          <h2>Shrey Thakkar</h2>
          <ul className="footer-navbar__menu">
            {menu?.map((element: { id: string; link: string; title: string }) => {
              return (
                <li key={element.id} className="footer-navbar__list-item">
                  <Link to={element.link}>{element.title}</Link>
                </li>
              )
            })}
          </ul>

          <div className="footer-container___social-media-buttons">
            {socialMediaMenu?.map((element) => {
              return (
                <span className="footer-container__cards-icon" key={element.id}>
                  <a href={element.link} target="_blank" rel="noreferrer">
                    {element.icon}
                  </a>
                </span>
              )
            })}
          </div>

          <p className="footer-container__rights-reserved">
            <FontAwesomeIcon icon={faCopyright} />
            Shrey Thakkar. All rights reserved.
          </p>
        </div>
      </Box>
    </footer>
  )
}

export default Footer

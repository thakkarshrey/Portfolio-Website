import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../box'
import { navbarUtils } from '../navbar/Data'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  const socialMediaLinksData = [
    {
      id: 1,
      link: 'https://linkdn.com',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      label: 'Linkdin'
    },
    {
      id: 2,
      link: 'https://github.com',
      icon: <FontAwesomeIcon icon={faGithub} />,
      label: 'Github'
    },
    {
      id: 3,
      link: 'https://instagram.com',
      icon: <FontAwesomeIcon icon={faInstagram} />,
      label: 'Instagram'
    }
  ]
  return (
    <footer id="footer">
      <Box>
        <div className="footer-container">
          <h2>Shrey Thakkar</h2>
          <ul className="footer-navbar__menu">
            {navbarUtils?.map((element: { id: number; link: string; title: string }) => {
              return (
                <li key={element.id} className="footer-navbar__list-item">
                  <a href={element.link}>{element.title}</a>
                </li>
              )
            })}
          </ul>

          <div className="footer-container___social-media-buttons">
            {socialMediaLinksData?.map((element) => {
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

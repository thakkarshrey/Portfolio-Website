import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Box from '../box'
import Button from '../button'
import useTypewriterEffect from '../../../hooks/useTypewriterEffect'
import './Header.css'

const Header = () => {
  /* typewriter effect dependencies */
  const words = ['Frontend Developer.', 'Software Engineer.', 'Web Developer.']

  const typeWriter = useTypewriterEffect(words)
  /* typewriter effect dependencies */

  /* social media links array */
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
  /* social media links array */

  return (
    <section id="header" className="section">
      <Box>
        <div className="header__container">
          <div className="header__content">
            <h3 className="about__about-me-title">
              Hey, I'm Shrey 👋 <br />I am a passionate{' '}
              <span id="header__typrwriter">{typeWriter}</span>
              <span id="header__cursor">|</span>
            </h3>

            <div className="header__navigation-buttons">
              <a href="#contact" style={{ '--navigation-buttons-i': 1 } as React.CSSProperties}>
                <Button variant="primary">Let's Talk</Button>
              </a>

              <a href="#portfolio" style={{ '--navigation-buttons-i': 2 } as React.CSSProperties}>
                <Button variant="secondary">My Work</Button>
              </a>
            </div>
            <div className="header__social-media-container">
              {socialMediaLinksData?.map((element, index) => {
                return (
                  <div
                    className="header__social-media-button"
                    style={
                      {
                        '--social-media-buttons-i': index
                      } as React.CSSProperties
                    }
                    key={element.id}
                  >
                    <div key={element.id} className="header__social-media-icon">
                      {element.icon}
                    </div>
                    <a href={element.link} target="_blank" rel="noreferrer">
                      {element.label}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="header__profile"></div>
        </div>
      </Box>
    </section>
  )
}

export default Header

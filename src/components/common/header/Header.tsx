import Box from '../box'
import Button from '../button'
import useTypewriterEffect from '../../../hooks/useTypewriterEffect'
import { useAnimate } from '../../../hooks/useAnimate'
import { Link } from 'react-router'
import { socialMediaLinkUtils } from '../../../utils/socialMediaLinkUtils'
import './Header.css'

const Header = () => {
  const animationClass = useAnimate(100)

  /* typewriter effect dependencies */
  const words = ['Frontend Developer.', 'Software Engineer.', 'Web Developer.']

  const typeWriter = useTypewriterEffect(words)
  /* typewriter effect dependencies */

  const socialMediaMenu = socialMediaLinkUtils()

  return (
    <section id="header" className={`section ${animationClass}`}>
      <Box>
        <div className="header__container">
          <div className="header__content">
            <h3 className="about__about-me-title">
              Hey, I'm Shrey 👋 <br />I am a passionate{' '}
              <span id="header__typrwriter">{typeWriter}</span>
              <span id="header__cursor">|</span>
            </h3>

            <div className="header__navigation-buttons">
              <Link to="/contact" style={{ '--navigation-buttons-i': 1 } as React.CSSProperties}>
                <Button variant="primary">Let's Talk</Button>
              </Link>

              <Link to="/projects" style={{ '--navigation-buttons-i': 2 } as React.CSSProperties}>
                <Button variant="secondary">My Work</Button>
              </Link>
            </div>
            <div className="header__social-media-container">
              {socialMediaMenu?.map((element, index) => {
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
                    <Link to={element.link} target="_blank" rel="noreferrer">
                      {element.label}
                    </Link>
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../common/box'
import Button from '../../common/button'
import { faBuildingColumns, faMedal } from '@fortawesome/free-solid-svg-icons'
import { useMediaMatch } from '../../../hooks/useMediaMatch'
import React, { SetStateAction, useCallback, useEffect, useState } from 'react'
import { useAnimate } from '../../../hooks/useAnimate'
import GlowingButton from '../../common/glowing-button'
import useThemeChange from '../../../hooks/useThemeChange'
import './About.css'

type ExperienceAndEducationCardProps = {
  id: number
  icon: React.ReactElement
  title: string
  paragraph_01: string
  paragraph_02: string
}

const About = () => {
  const animationClass = useAnimate(100)
  const { selectedTheme } = useThemeChange()
  const isMobile = useMediaMatch('(max-width:1024px)')
  const [isFlipped, setIsFlipped] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false)
    }, 1000)
  }, [])

  const experienceData = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faMedal} />,
      title: 'Experience',
      paragraph_01: '4 years',
      paragraph_02: 'Software Engineer'
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faBuildingColumns} />,
      title: 'Education',
      paragraph_01: 'Bachelors Degree',
      paragraph_02: 'Electrical Engineer'
    }
  ]

  /* Function definition to download the resume */
  const downloadResume = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/Shrey_Thakkar.pdf'
    link.download = 'Shrey_Thakkar.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])
  /* Function definition to download the resume */

  return (
    <section id="about" className={`section ${animationClass}`}>
      <Box>
        <div className="about__card-container">
          <div>
            <p className="about__get-to-know-title">Get to know</p>
            <h2 className="about__about-me-title">About me</h2>
          </div>
          {isMobile ? (
            <AboutCardsSmallAndMediumDevices
              experienceData={experienceData}
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              initialLoad={initialLoad}
              selectedTheme={selectedTheme}
              downloadResume={downloadResume}
            />
          ) : (
            <AboutCardsForDesktopDevice
              experienceData={experienceData}
              downloadResume={downloadResume}
            />
          )}
        </div>
      </Box>
    </section>
  )
}

const ExperienceAndEducationCard = React.memo(
  ({ icon, title, paragraph_01, paragraph_02 }: ExperienceAndEducationCardProps) => {
    return (
      <div>
        <div className="about__cards-icon-container">
          <span className="about__cards-icon">{icon}</span>
          <h5>{title}</h5>
        </div>
        <small>
          {paragraph_01} <br />
          {paragraph_02}
        </small>
      </div>
    )
  }
)

type AboutCardsSmallAndMediumDevicesProps = {
  experienceData: ExperienceAndEducationCardProps[]
  isFlipped: boolean
  setIsFlipped: React.Dispatch<SetStateAction<boolean>>
  initialLoad: boolean
  selectedTheme: string
  downloadResume: () => void
}

const AboutCardsSmallAndMediumDevices = React.memo(
  ({
    experienceData,
    setIsFlipped,
    isFlipped,
    initialLoad,
    selectedTheme,
    downloadResume
  }: AboutCardsSmallAndMediumDevicesProps) => {
    return (
      <div className="about__card">
        <div
          className={`about__profile ${isFlipped ? 'flipped' : ''} ${!initialLoad && 'reset-delay'}`}
        >
          <div className="about__front-image">
            <div className="about__info-card-container">
              {
                <div className="about__info-card">
                  <div className="about__info-card-paragraph">
                    <p>
                      Hi, I’m a Software Engineer by profession and Electrical Engineer by
                      Education.
                    </p>
                    <p>I have over 4 years of experience as a Software Engineer.</p>
                  </div>
                  <div className="about__info-card-button">
                    <GlowingButton
                      onClick={() => {
                        setIsFlipped((prevValue) => !prevValue)
                      }}
                    >
                      Read more
                    </GlowingButton>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="about__back-image">
            <div className="about__content">
              <div className="about__cards">
                {experienceData?.map((element: ExperienceAndEducationCardProps) => {
                  return <ExperienceAndEducationCard key={element.id} {...element} />
                })}
              </div>
              <p>
                I love building responsive web apps and improving user interfaces. I’m passionate
                about exploring new front‑end frameworks, experimenting with animations, and
                optimizing performance to ensure every interaction feels smooth and intuitive.
              </p>
              <p>
                Outside work, I stay active by hitting the gym, playing, or watching
                football—balancing my coding life with fitness and fun.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="primary" onClick={downloadResume}>
                  Download CV
                </Button>
                <GlowingButton
                  color={selectedTheme === 'light' ? 'var(--primary-color)' : ''}
                  onClick={() => {
                    setIsFlipped((prevValue) => !prevValue)
                  }}
                >
                  Go back
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

const AboutCardsForDesktopDevice = React.memo(
  ({
    experienceData,
    downloadResume
  }: {
    experienceData: ExperienceAndEducationCardProps[]
    downloadResume: () => void
  }) => {
    return (
      <div className="about__card">
        <div className="about__profile">
          <div className="about__front-image"></div>
          <div className="about__back-image">
            <div className="about__back-image-content">
              <p>Hi, I’m a Software Engineer by profession and Electrical Engineer by Education.</p>
              <p>I have over 4 years of experience as a Software Engineer.</p>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {experienceData?.map((element: ExperienceAndEducationCardProps) => {
              return <ExperienceAndEducationCard key={element.id} {...element} />
            })}
          </div>
          <p>
            I love building responsive web apps and improving user interfaces. I’m passionate about
            exploring new front‑end frameworks, experimenting with animations, and optimizing
            performance to ensure every interaction feels smooth and intuitive.
          </p>
          <p>
            Outside work, I stay active by hitting the gym, playing, or watching football—balancing
            my coding life with fitness and fun.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" onClick={downloadResume}>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    )
  }
)

export default About

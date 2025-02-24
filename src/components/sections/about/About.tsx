import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../../common/box";
import Button from "../../common/button";
import { faArrowsRotate, faBuildingColumns, faHouse, faMedal } from "@fortawesome/free-solid-svg-icons";
import "./About.css"
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { forwardRef, SetStateAction, useEffect, useRef, useState } from "react";


type ExperienceAndEducationCardProps = {
  id: number
  icon: React.ReactElement
  title: string
  paragraph_01: string
  paragraph_02: string
}

const About = () => {
  const experienceData = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faMedal} />,
      title: "Experience",
      paragraph_01: "3.6 years",
      paragraph_02: "Frontend Development"
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faBuildingColumns} />,
      title: "Education",
      paragraph_01: "Bachelors Degree",
      paragraph_02: "Electrical Engineer"
    }
  ];

  const isDesktop = useMediaMatch('(max-width:1024px)')
  const [isFlipped, setIsFlipped] = useState(false)
  const aboutProfileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (aboutProfileRef.current) {
      if (isFlipped) {
        aboutProfileRef.current?.classList.add('flipped')
      }
      else {
        aboutProfileRef.current?.classList.remove('flipped')
      }
    }

  }, [isFlipped])


  return (
    <section id="about" className="section">
      <Box>
        <div className="about__card-container">
          <div>
            <p className="about__get-to-know-title">Get to know</p>
            <h2 className="about__about-me-title">About me</h2>
          </div>
          {
            isDesktop ?
              <AboutCardsSmallAndMediumDevices experienceData={experienceData} isFlipped={isFlipped} setIsFlipped={setIsFlipped} ref={aboutProfileRef} />
              :
              <AboutCardsForDesktopDevice experienceData={experienceData} />
          }
        </div>
      </Box>
    </section>
  );
};


function ExperienceAndEducationCard({ icon, title, paragraph_01, paragraph_02 }: ExperienceAndEducationCardProps) {
  return (
    <div>
      <div className="about__cards-icon-container">
        <span className="about__cards-icon">
          {icon}
        </span>
        <h5>
          {title}
        </h5>
      </div>
      <small>{paragraph_01} <br />{paragraph_02}</small>
    </div>
  )
}

type AboutCardsSmallAndMediumDevicesProps = {
  experienceData: ExperienceAndEducationCardProps[],
  isFlipped: boolean,
  setIsFlipped: React.Dispatch<SetStateAction<boolean>>
}


const AboutCardsSmallAndMediumDevices = forwardRef<HTMLDivElement, AboutCardsSmallAndMediumDevicesProps>(({ experienceData, isFlipped, setIsFlipped }, ref) => {
  return (
    <div className="about__card">
      <div ref={ref} className="about__profile">
        <div className="about__front-image">
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: 'var(--primary-color)' }} onClick={() => {
            setIsFlipped((prevValue) => !prevValue)
          }} />
        </div>
        <div className="about__back-image">
          <div className="about__content">
            <FontAwesomeIcon icon={faArrowsRotate} style={{ color: 'var(--primary-color)' }} onClick={() => {
              setIsFlipped((prevValue) => !prevValue)
            }} />

            <div className="about__cards">
              {
                experienceData?.map((element: ExperienceAndEducationCardProps) => {
                  return <ExperienceAndEducationCard key={element.id} {...element} />
                })
              }
            </div>
            <p>I love building responsive web apps and improving user interfaces.</p>
            <p>Outside work, I stay active by hitting the gym, playing, or watching football—balancing my coding life with fitness and fun.</p>
            <a
              href="#contact"
            >
              <Button variant="primary">Download CV</Button>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
})


function AboutCardsForDesktopDevice({ experienceData }: {
  experienceData: ExperienceAndEducationCardProps[]
}) {
  return (
    <div className="about__card">
      <div className="about__profile">
        <div className="about__front-image">
        </div>
        <div className="about__back-image">
          <div className="about__back-image-content">
            <p>Hi, I’m a Software Engineer by profession and Electrical Engineer by Education.</p>
            <p>I have over 3 years of experience in Frontend Development.</p>
          </div>
        </div>
      </div>
      <div className="about__content">

        <div className="about__cards">
          {
            experienceData?.map((element: ExperienceAndEducationCardProps) => {
              return <ExperienceAndEducationCard key={element.id} {...element} />
            })
          }
        </div>
        <p>I love building responsive web apps and improving user interfaces.</p>
        <p>Outside work, I stay active by hitting the gym, playing, or watching football—balancing my coding life with fitness and fun.</p>
        <a
          href="#contact"
        >
          <Button variant="primary">Download CV</Button>
        </a>

      </div>
    </div>
  )
}

export default About;

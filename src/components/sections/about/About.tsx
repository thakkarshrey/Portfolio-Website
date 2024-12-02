import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../../common/box";
import Button from "../../common/button";
import { faBuildingColumns, faMedal } from "@fortawesome/free-solid-svg-icons";
import "./About.css"

type Props = {};

type ExperienceAndEducationCardProps = {
  icon: React.ReactElement
  title: string
  paragraph_01: string
  paragraph_02: string
}

const About = (props: Props) => {
  const experienceData = [
    {
      icon: <FontAwesomeIcon icon={faMedal} />,
      title: "Experience",
      paragraph_01: "3.2 years",
      paragraph_02: "Frontend Development"
    },
    {
      icon: <FontAwesomeIcon icon={faBuildingColumns} />,
      title: "Education",
      paragraph_01: "Bachelors Degree",
      paragraph_02: "Electrical Engineer"
    }
  ];

  return (
    <section id="about" className="section">
      <Box>
        <div className="about__card-container">
          <p>Get to know</p>
          <h2>About me</h2>
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
                    return <ExperienceAndEducationCard {...element} />
                  })
                }
              </div>
              {/* <p>Hi, I’m a Software Engineer by profession and Electrical Engineer by Education.</p>
              <p>I have over 3 years of experience in Frontend Development. I love building responsive web apps and improving user interfaces.</p> */}
              <p>I love building responsive web apps and improving user interfaces.</p>
              {/* <p>Outside of work, I’m dedicated to maintaining a healthy lifestyle. When I'm not coding, you’ll likely find me at the gym working out or playing and watching football — a great way to balance the focus-driven nature of my coding life with physical activity.</p> */}
              <p>Outside work, I stay active by hitting the gym, playing, or watching football—balancing my coding life with fitness and fun.</p>
              <a
                href="#contact"
              >
                <Button variant="primary">Download CV</Button>
              </a>

            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};


function ExperienceAndEducationCard({ icon, title, paragraph_01, paragraph_02 }: ExperienceAndEducationCardProps) {
  return (
    <div>
      <span className="about__cards-icon">
        {icon}
      </span>
      <h5>
        {title}
      </h5>
      <small>{paragraph_01} <br />{paragraph_02}</small>
    </div>
  )
}

export default About;

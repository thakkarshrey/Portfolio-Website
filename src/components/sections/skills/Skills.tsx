import {
  CSSIcon,
  ExpressIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  TypescriptIcon
} from '../../../assets/svg'
import { useAnimate } from '../../../hooks/useAnimate'
import Box from '../../common/box'
import './Skills.css'

const Skills = () => {
  const animationClass = useAnimate(100)
  const skillsArr = [
    {
      icon: <ReactIcon />,
      title: 'React',
      level: 'Experienced'
    },
    {
      icon: <HtmlIcon />,
      title: 'HTML',
      level: 'Experienced'
    },
    {
      icon: <CSSIcon />,
      title: 'CSS',
      level: 'Experienced'
    },
    {
      icon: <JavascriptIcon />,
      title: 'Javascript',
      level: 'Experienced'
    },
    {
      icon: <TypescriptIcon />,
      title: 'Typescript',
      level: 'Intermediate'
    },
    {
      icon: <NodeIcon />,
      title: 'Node JS',
      level: 'Basic'
    },
    {
      icon: <ExpressIcon />,
      title: 'Express',
      level: 'Basic'
    }
  ]
  return (
    <section id="skills" className={`section ${animationClass}`}>
      <Box>
        <div className="skills-container">
          <div className="skills-container__header">
            <h2>Technologies</h2>
            <p>I use</p>
          </div>
          <div className="skills-container__icons-container">
            {skillsArr?.map(({ icon, title, level }, index) => {
              return (
                <div
                  className="skills-container__icon"
                  style={{ '--i-technologies': index + 1 } as React.CSSProperties}
                  key={index}
                >
                  {icon}
                  <div>
                    <h5>{title}</h5>
                    <p>{level}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Box>
    </section>
  )
}

export default Skills

import { AppAssetsConfig } from '../../../assets/config/AppAssetsConfig'
import Box from '../../common/box'
import './Experience.css'

type ExperienceTypes = {
  id: number
  company_name: string
  content: string
  company_logo: string
  start_year: string
  end_year: string
  job_title: string
}

type TimelineProps = ExperienceTypes & { index: number }

const Experience = () => {
  const experienceArr: ExperienceTypes[] = [
    {
      id: 1,
      company_name: 'Reyna Solutions',
      content:
        'Developed interactive features like form builders, Kanban boards, and real-time chat for healthcare, education, and business platforms. Led teams, built projects from scratch, and delivered over 200 screens quickly with smooth backend integrations.',
      company_logo: AppAssetsConfig.REYNA_SOLUTIONS_LOGO,
      start_year: 'May 2023',
      end_year: 'Present',
      job_title: 'Software Engineer'
    },
    {
      id: 2,
      company_name: 'iTechnoSol Inc.',
      content:
        'Delivered scalable solutions for real estate, logistics, and navy platforms, specializing in ReactJS development, reusable modules, and seamless front-end transitions. Led key modules like Estates, Orders, and Notifications, enhancing user experience and functionality.',
      company_logo: AppAssetsConfig.ITECHNOSOL_LOGO,
      start_year: 'May 2022',
      end_year: 'April 2023',
      job_title: 'Jr. Frontend Developer'
    },
    {
      id: 3,
      company_name: 'Geo Designs & Research',
      content:
        'Streamlined data management for a civil construction company by building efficient modules for items, customers, and suppliers. Enhanced user workflows with form validations, file attachments, and export-to - Excel functionalities using React and modern libraries.',
      company_logo: AppAssetsConfig.GEO_DESIGNS_RESEARCH_LOGO,
      start_year: 'March 2021',
      end_year: 'Nov 2021',
      job_title: 'Graduate Engineer Trainee'
    }
  ]
  return (
    <section id="experience" className="section">
      <Box>
        <div className="experience__card-container">
          <div>
            <p className="experience__explore-my-journey">Explore my journey</p>
            <h2 className="experience__title">My Experience</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-container__line"></div>
            {experienceArr?.map((element: ExperienceTypes, index: number) => {
              return <Timeline key={element.id} {...element} index={index} />
            })}
          </div>
        </div>
      </Box>
    </section>
  )
}

const Timeline = ({
  company_logo,
  company_name,
  start_year,
  end_year,
  job_title,
  content,
  index
}: TimelineProps) => {
  return (
    <div className="timeline">
      <img
        src={company_logo}
        className="timeline__image"
        alt={company_name}
        style={{ '--company-logo-i': index + 1 } as React.CSSProperties}
      />
      <div
        className="timeline__content-container"
        style={{ '--timeline-content-i': index + 1 } as React.CSSProperties}
      >
        <div className="timeline__arrow"></div>
        <div className="timeline__content">
          <div className="timeline__company-name-year">
            <h4>{company_name}</h4>
            <p>
              {start_year} - {end_year}
            </p>
          </div>
          <h5>{job_title}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Experience

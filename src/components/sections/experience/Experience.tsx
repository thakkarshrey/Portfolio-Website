import Box from '../../common/box'
import "./Experience.css"

type Props = {}

const Experience = (props: Props) => {
    const experienceArr = [
        {
            company_name: "Reyna Solutions",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam exercitationem sunt iure, nisi totam officia architecto necessitatibus illo soluta modi, esse voluptates?",
            company_logo: "https://images.pexels.com/photos/29749442/pexels-photo-29749442/free-photo-of-festive-holiday-scene-with-candles-and-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2",
            start_year: "2022",
            end_year: "Present",
            job_title: "Software Engineer"
        },
        {
            company_name: "iTechnoSol Inc.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam exercitationem sunt iure, nisi totam officia architecto necessitatibus illo soluta modi, esse voluptates?",
            company_logo: "https://images.pexels.com/photos/29749442/pexels-photo-29749442/free-photo-of-festive-holiday-scene-with-candles-and-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2",
            start_year: "2021",
            end_year: "2022",
            job_title: "Jr. Frontend Developer"
        },
        {
            company_name: "iTechnoSol Inc.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aperiam exercitationem sunt iure, nisi totam officia architecto necessitatibus illo soluta modi, esse voluptates?",
            company_logo: "https://images.pexels.com/photos/29749442/pexels-photo-29749442/free-photo-of-festive-holiday-scene-with-candles-and-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=100&dpr=2",
            start_year: "2021",
            end_year: "2022",
            job_title: "Jr. Frontend Developer"
        }
    ]
    return (
        <section id="experience" className="section">
            <Box>
                <div className="experience__card-container">
                    <h2 className="experience__title">Experience</h2>
                    <div className="timeline-container">
                        <div className="timeline-container__line"></div>
                        {
                            experienceArr?.map((element, index) => {
                                return (
                                    <div className="timeline">
                                        <img
                                            src={element.company_logo}
                                            className="timeline__image"
                                            alt={element.company_name}
                                            style={{ "--company-logo-i": index + 1 } as React.CSSProperties}
                                        />
                                        <div className="timeline__content-container" style={{ "--timeline-content-i": index + 1 } as React.CSSProperties}>
                                            <div className="timeline__arrow"></div>
                                            <div className="timeline__content">
                                                <h3>{element.company_name}</h3>
                                                <h4>{element.job_title}</h4>
                                                {element.content}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Experience
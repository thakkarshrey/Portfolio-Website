
import { CSSIcon, ExpressIcon, HtmlIcon, JavascriptIcon, NodeIcon, ReactIcon, TypescriptIcon } from '../../../assets/svg'
import Box from '../../common/box'
import "./Skills.css"

type Props = {}

const Skills = (props: Props) => {
    const skillsArr = [
        <ReactIcon />,
        <HtmlIcon />,
        <CSSIcon />,
        <JavascriptIcon />,
        <TypescriptIcon />,
        <NodeIcon />,
        <ExpressIcon />
    ]
    return (
        <section id="skills" className="section">
            <Box>
                <div className="skills-container">
                    <div>
                        <h2>Technologies</h2>
                        <p>I use</p>
                    </div>
                    <div className="skills-container__icons-container">
                        {
                            skillsArr?.map((icon, index) => {
                                return <div
                                    className='skills-container__icon'
                                    style={{ "--i-technologies": index } as React.CSSProperties}
                                >
                                    {icon}
                                </div>

                            })
                        }
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Skills
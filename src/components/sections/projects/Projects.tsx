import ReactParallaxTilt from "react-parallax-tilt";
import "./Projects.css";
import Button from "../../common/button";
import Tags from "../../common/tags";
import Box from "../../common/box";
type Props = {};

const Projects = (props: Props) => {

  const projectsArr = [
    {
      id: 1,
      name: "Wizer",
      description: "Wizer is an interactive platform for creating personalized digital worksheets and learning materials. It allows educators to design engaging, multimedia-rich content to enhance the learning experience. I Designed and implemented a multi-step authentication workflow, developed interactive puzzle-based worksheets with JavaScript, integrated audio/video recording for multimedia interaction, and enhanced the text editor with canvas-based shape manipulation for creative customization.",
      techStack: ["React", "SCSS", "JavaScript", "Material-UI"],
      liveDemo: "https://app.wizer.me/",
      image: "/assets/images/Wizer.png"
    },
    {
      id: 2,
      name: "Ops-Acuity",
      description:
        "Ops-Acuity is a CRM system with modules for customer management, project scheduling, employee management, lead tracking, sales reps, lead pools, agent management, campaigns, and fleet management, where I led the frontend team, designed the project structure, developed core features, wrote clean, reusable code, and integrated Google Maps API, Gantt chart, and a Kanban board for task management and workflow visualization.",
      techStack: ["React.js", "CSS", "Typescript", "Redux-Toolkit"],
      liveDemo: "https://demo.opsacuity.com/",
      image: "/assets/images/Ops_Acuity.png"
    },
    {
      id: 4,
      name: "Synapp Expertise",
      description:
        "A blogging platform where users can write, edit, and share their blogs, with Markdown support.",
      techStack: ["React.js", "SCSS", "Antd", "Redux-Toolkit"],
      liveDemo: "https://expertise-dev.synapp.eu/",
      image: "/assets/images/Synapp_Expertise.png"
    },
    {
      id: 5,
      name: "react-kanbanify",
      description:
        "A lightweight and customizable Kanban board library for React, designed to easily integrate task management and workflow visualization into your applications, with drag-and-drop functionality, column resizing, and flexible configuration options.",
      techStack: ["React.js", "SCSS", "Typescript"],
      githubLink: "https://github.com/thakkarshrey/react-kanbanify",
      liveDemo: "https://www.npmjs.com/package/react-kanbanify",
      image: "/assets/images/react_kanbanify.png"
    },
  ];


  return (
    <section id="projects" className="section">
      <Box>
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="projects-container__cards-container">
            {
              projectsArr?.map((project) => {
                return (
                  <div key={project.id} className="projects-container__parent-card">
                    <ReactParallaxTilt className="projects-container__card">
                      <div className="projects-container__img-box">
                        <img src={project.image} alt={project.name} />
                      </div>
                      <div className="projects-container__content">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <Tags data={project.techStack} />
                        <div style={{ display: 'grid', gap: '1rem', alignContent: 'center' }}>
                          {
                            project?.githubLink &&
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Button variant="secondary">Github</Button>
                            </a>
                          }
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button variant="primary" >Live Demo</Button>
                          </a>

                        </div>
                      </div>
                    </ReactParallaxTilt>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Projects;

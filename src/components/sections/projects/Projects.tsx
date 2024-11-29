import ReactParallaxTilt from "react-parallax-tilt";
import "./Projects.css";
type Props = {};

const Projects = (props: Props) => {

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        <ReactParallaxTilt className="projects-container__card">
          <div className="projects-container__img-box">
            <img src={"/assets/images/image_01.jpg"} alt="" />
          </div>
          <div className="projects-container__content">
            <h4>Paris</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
              accusamus fugiat cupiditate cumque possimus veritatis quisquam nulla
              deleniti animi vel nesciunt dolorum pariatur totam accusantium culpa
              dolor architecto sunt nemo.
            </p>
          </div>
        </ReactParallaxTilt>
        <ReactParallaxTilt className="projects-container__card">
          <div className="projects-container__img-box">
            <img src="/assets/images/image_02.jpg" alt="" />
          </div>
          <div className="projects-container__content">
            <h4>Green leaf exotica</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
              accusamus fugiat cupiditate cumque possimus veritatis quisquam nulla
              deleniti animi vel nesciunt dolorum pariatur totam accusantium culpa
              dolor architecto sunt nemo.
            </p>
          </div>
        </ReactParallaxTilt>
        <div className="projects-container__card">
          <div className="projects-container__img-box">
            <img src="/assets/images/image_03.jpg" alt="" />
          </div>
          <div className="projects-container__content">
            <h4>Vagator beach</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
              accusamus fugiat cupiditate cumque possimus veritatis quisquam nulla
              deleniti animi vel nesciunt dolorum pariatur totam accusantium culpa
              dolor architecto sunt nemo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

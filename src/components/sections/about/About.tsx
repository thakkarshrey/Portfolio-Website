import Box from "../../common/box";
import Button from "../../common/button";
import "./About.css"

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about">
      <Box>
        <div className="about__card-container">
          <p>Get to Know more</p>
          <h2>About me</h2>
          <div className="about__card">
            <div className="about__profile">
              <div className="about__front-image"></div>
              <div className="about__back-image"></div>
            </div>
            <div className="about__content">
              <div className="about__cards">

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis voluptate quibusdam, sunt voluptatem laboriosam ad officiis? Tenetur architecto doloribus itaque aperiam nemo perspiciatis cupiditate non tempore laboriosam mollitia qui inventore, placeat quis, sapiente incidunt. Ullam id eius nemo quas, tempora eveniet distinctio saepe commodi deserunt minus quisquam aliquam iure?</p>
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

export default About;

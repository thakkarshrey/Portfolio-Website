import Button from "../../common/button";

type Props = {};

const About = (props: Props) => {
  const Icon = () => {
    return <>$</>;
  };
  return (
    <section id="about" className="section">
      <h2>About</h2>

      <Button variant="primary">
        Button <Icon />
      </Button>
      <p>This is a p tag</p>
    </section>
  );
};

export default About;

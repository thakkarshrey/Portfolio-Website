import { useEffect } from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import "./App.css";
import Footer from "../components/common/footer";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    function animate() {
      const sections = document.querySelectorAll("section");
      sections.forEach((element) => {
        const scrollY = window.scrollY;
        const offsetTop = element.offsetTop - 150;
        const offsetHeight = element.offsetHeight;
        console.log({ scrollY, offsetTop, offsetHeight });
        if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
          element.classList.add("show-animation");
        } else {
          element.classList.remove("show-animation");
        }
      });
    }
    window.onscroll = () => animate();
    window.onload = () => animate();
  });

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Technologies</h2>
      <p>I use</p>
    </section>
  )
}

export default App;

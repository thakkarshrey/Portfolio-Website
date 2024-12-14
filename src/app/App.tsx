import { useEffect } from "react";
import Header from "../components/common/header";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/common/footer";
import Skills from "../components/sections/skills";
import "./App.css";
import FloatingNavbar from "../components/common/floating-navbar";
import Experience from "../components/sections/experience";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    function animate() {
      sections.forEach((element) => {
        const scrollY = window.scrollY;
        const offsetTop = element.offsetTop - 150;
        const offsetHeight = element.offsetHeight;
        if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
          element.classList.add("show-animation");
        } else {
          element.classList.remove("show-animation");
        }
        console.log({ scrollY, offsetTop, offsetHeight })
      });
    }
    window.onscroll = () => animate();
    window.onload = () => animate();

    sections[0].classList.add("show-animation")

  }, []);

  return (
    <>
      <FloatingNavbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};


export default App;

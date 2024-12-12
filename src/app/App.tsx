import { useEffect } from "react";
import Header from "../components/common/header";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/common/footer";
import Skills from "../components/sections/skills";
import FloatingNavbar from "../components/common/floating-navbar";
import "./App.css";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    function animate() {
      const sections = document.querySelectorAll("section");
      sections.forEach((element) => {
        const scrollY = window.scrollY;
        const offsetTop = element.offsetTop - 150;
        const offsetHeight = element.offsetHeight;
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
      <FloatingNavbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};


export default App;

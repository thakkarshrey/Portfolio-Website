import { useEffect } from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import About from "../components/sections/about";
import "./App.css";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    function animate() {
      const sections = document.querySelectorAll("section");
      console.log(sections, "sections");
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
    </>
  );
};

export default App;

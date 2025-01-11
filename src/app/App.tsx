import { useEffect, useState } from "react";
import Header from "../components/common/header";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/common/footer";
import Skills from "../components/sections/skills";
import FloatingNavbar from "../components/common/floating-navbar";
import Experience from "../components/sections/experience";
import Carousel from "../components/common/carousel";
import BackgroundWithCanvas from "../components/common/background-with-canvas";
import { faAddressBook, faAddressCard, faCode, faHouse, faLaptopFile, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains("show-animation")) {
              entry.target.classList.add("show-animation");
            }
          } else {
            entry.target.classList.remove("show-animation");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [data, setData] = useState([
    {
      id: 1,
      component: <Header />,
      title: "Home",
      link: "#header",
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 2,
      component: <About />,
      title: "About",
      link: "#about",
      icon: <FontAwesomeIcon icon={faAddressCard} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 3,
      component: <Experience />,
      title: "Experience",
      link: "#experience",
      icon: <FontAwesomeIcon icon={faLaptopFile} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 4,
      component: <Skills />,
      title: "Skills",
      link: "#skills",
      icon: <FontAwesomeIcon icon={faLayerGroup} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 5,
      component: <Projects />,
      title: "Projects",
      link: "#projects",
      icon: <FontAwesomeIcon icon={faCode} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 6,
      component: <Contact />,
      title: "Contact",
      link: "#contact",
      icon: <FontAwesomeIcon icon={faAddressBook} style={{ color: "var(--white-color)" }} />,
    },
  ])
  const [loading, setLoading] = useState(false)


  return (
    <>
      {/* <FloatingNavbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
      <BackgroundWithCanvas>
        <div className="carousel-container">
          <Carousel
            componentsPerSlide={1}
            componentsArr={data}
            loading={loading}
            componentLimit={6}
          />
        </div>
      </BackgroundWithCanvas>
    </>
  );
};

export default App;



// import { useEffect } from "react";
// import Header from "../components/common/header";
// import About from "../components/sections/about";
// import Projects from "../components/sections/projects";
// import Contact from "../components/sections/contact";
// import Footer from "../components/common/footer";
// import Skills from "../components/sections/skills";
// import FloatingNavbar from "../components/common/floating-navbar";
// import Experience from "../components/sections/experience";
// import "./App.css";

// type Props = {};

// const App = (props: Props) => {
//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     function animate() {
//       sections.forEach((element) => {
//         const scrollY = window.scrollY;
//         const offsetTop = element.offsetTop - 150;
//         const offsetHeight = element.offsetHeight;
//         if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
//           element.classList.add("show-animation");
//         } else {
//           element.classList.remove("show-animation");
//         }
//       });
//     }
//     window.onscroll = () => animate();
//     window.onload = () => animate();

//     sections[0].classList.add("show-animation")

//   }, []);

//   return (
//     <div className="main-container">
//       <FloatingNavbar />
//       <Header />
//       <About />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };


// export default App;

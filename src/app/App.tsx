import { useEffect } from "react";
import Header from "../components/common/header";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/common/footer";
import Skills from "../components/sections/skills";
import FloatingNavbar from "../components/common/floating-navbar";
import Experience from "../components/sections/experience";
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

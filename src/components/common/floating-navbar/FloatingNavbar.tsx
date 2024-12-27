import { faAddressBook, faAddressCard, faCode, faHouse, faLaptopFile, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./FloatingNavbar.css";

type Props = {};

const FloatingNavbar = (props: Props) => {
  const navbarUtils = [
    {
      id: 1,
      title: "Home",
      link: "#header",
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 2,
      title: "About",
      link: "#about",
      icon: <FontAwesomeIcon icon={faAddressCard} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 3,
      title: "Experience",
      link: "#experience",
      icon: <FontAwesomeIcon icon={faLaptopFile} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 4,
      title: "Skills",
      link: "#skills",
      icon: <FontAwesomeIcon icon={faLayerGroup} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 5,
      title: "Projects",
      link: "#projects",
      icon: <FontAwesomeIcon icon={faCode} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 6,
      title: "Contact",
      link: "#contact",
      icon: <FontAwesomeIcon icon={faAddressBook} style={{ color: "var(--white-color)" }} />,
    },
  ];
  const [currentElementLink, setCurrentElementLink] = useState(navbarUtils[0].link);


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.hash = `#${entry.target.id}`
            setCurrentElementLink(`#${entry.target.id}`)
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
    <div id="floating-navbar">
      <ul className="floating-navbar__menu">
        {navbarUtils?.map(
          (
            element: { id: number; link: string; title: string, icon: React.ReactElement }
          ) => {
            return (
              <li key={element.id} className={`floating-navbar__list-item ${element.link === currentElementLink ? "floating-navbar--active-tab" : ""}`}>
                <a
                  href={element.link}
                >
                  <span className="floating-navbar__icon">{element.icon} </span>
                </a>
              </li>
            );
          }
        )}
        <div className="floating-navbar__indicator"></div>
      </ul>
    </div>
  );
};

export default FloatingNavbar;

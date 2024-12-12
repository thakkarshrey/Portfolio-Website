import { faAddressBook, faAddressCard, faCode, faHouse, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FloatingNavbar.css";
import { useState } from "react";

type Props = {};

const FloatingNavbar = (props: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
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
      title: "Skills",
      link: "#skills",
      icon: <FontAwesomeIcon icon={faLayerGroup} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 4,
      title: "Projects",
      link: "#projects",
      icon: <FontAwesomeIcon icon={faCode} style={{ color: "var(--white-color)" }} />,
    },
    {
      id: 5,
      title: "Contact",
      link: "#contact",
      icon: <FontAwesomeIcon icon={faAddressBook} style={{ color: "var(--white-color)" }} />,
    },
  ];

  const onNavbarClicked = (event: React.MouseEvent<HTMLElement>,
    index: number) => {
    setCurrentTabIndex(index)
  }

  return (
    <div id="floating-navbar">
      <ul className="floating-navbar__menu">
        {navbarUtils?.map(
          (
            element: { id: number; link: string; title: string, icon: React.ReactElement },
            index: number
          ) => {
            return (
              <li key={element.id} className={`floating-navbar__list-item ${index === currentTabIndex ? "floating-navbar--active-tab" : ""}`}>
                <a
                  href={element.link}
                  onClick={(event) => onNavbarClicked(event, index)}
                >
                  <span className="floating-navbar__icon">{element.icon} </span>
                  {/* <span className="floating-navbar__text">{element.title} </span> */}
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

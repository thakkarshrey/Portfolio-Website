import Box from "../box";
import { navbarUtils } from "./Data";
import { useEffect, useRef, useState } from "react";
import ThemeChanger from "../theme-changer";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const indicatorRef: any = useRef(null);
  const anchorTagRef: any = useRef(null);

  /* window scroll dependecies */
  const [isScroll, setIsScroll] = useState(false);
  /* window scroll dependecies */

  const onNavbarClicked = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    // setCurrentTabIndex(index);
    indicatorRef.current.style.left =
      (event.target as HTMLElement).offsetLeft + "px";
    indicatorRef.current.style.width =
      (event.target as HTMLElement).offsetWidth + "px";
  };



  useEffect(() => {
    if (anchorTagRef.current) {
      indicatorRef.current.style.left = anchorTagRef.current.offsetLeft + "px";
      indicatorRef.current.style.width =
        anchorTagRef.current.offsetWidth + "px";
    }
  }, [currentTabIndex]);



  useEffect(() => {
    const scrollFunction = () => {
      const scrollY = window.scrollY
      scrollY > 0 ? setIsScroll(true) : setIsScroll(false);

      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const height = section.offsetHeight
        const top = section.offsetTop - 150

        if (scrollY > top && scrollY < top + height) {
          const currentNavLinkId = section.getAttribute("id")
          const currentElementIndex = navbarUtils?.findIndex((element) => element.link === `#${currentNavLinkId}`)
          setCurrentTabIndex(currentElementIndex);
        }
      })
    };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      setIsScroll(false);
    };
  }, [currentTabIndex]);

  return (
    <nav className={`navbar ${isScroll ? "navbar--sticky" : ""}`}>
      <Box>
        <div
          className="navbar__container"
        >
          <a href="#header">
            <p className="navbar__name">Shrey.</p>
          </a>

          <div className="navbar__content">
            <ul className="navbar__menu">
              {navbarUtils?.map(
                (
                  element: { id: number; link: string; title: string },
                  index: number
                ) => {
                  return (
                    <li key={element.id} className={`navbar__list-item ${index === currentTabIndex ? "navbar--active-tab" : ""}`}>
                      <a
                        ref={index === currentTabIndex ? anchorTagRef : null}
                        href={element.link}
                        onClick={(event) => onNavbarClicked(event, index)}
                      >
                        {element.title}
                      </a>
                    </li>
                  );
                }
              )}
              <div className="navbar__indicator" ref={indicatorRef}></div>
            </ul>

          </div>
          <ThemeChanger />
        </div>
      </Box>
    </nav>
  );
};

export default Navbar;

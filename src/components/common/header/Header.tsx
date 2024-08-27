import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AppAssetsConfig } from "../../../assets/config/AppAssetsConfig";
import Box from "../box";
import Button from "../button";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  const socialMediaLinksData = [
    {
      id: 1,
      link: "https://instagram.com",
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      id: 2,
      link: "https://twitter.com",
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
      id: 3,
      link: "https://dribble.com",
      icon: <FontAwesomeIcon icon={faDribbble} />,
    },
    {
      id: 4,
      link: "https://github.com",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
  ];
  return (
    <div className="header">
      <Box>
        <div className="header__container">
          <div className="header__profile">
            <img src={AppAssetsConfig.PROFILE_PHOTO} alt="Shrey_Thakkar" />
          </div>
          <h3>Shrey Thakkar</h3>
          <p>
            You are a click away from building your dream website or web app.
            Send me the details of your project for a modern, mobile responsive,
            highly performant website today!
          </p>

          <div className="header__navigation-buttons">
            <a href="#contact">
              <Button variant="primary">Let's Talk</Button>
            </a>

            <a href="#portfolio">
              {" "}
              <Button>My Work</Button>
            </a>
          </div>

          <div className="header__social-media-links">
            {socialMediaLinksData?.map((element) => {
              return (
                <a
                  key={element.id}
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.icon}
                </a>
              );
            })}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Header;

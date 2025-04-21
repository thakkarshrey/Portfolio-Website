import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const socialMediaLinkUtils = () => {
  return [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/shrey-thakkar/',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      label: 'Linkdin'
    },
    {
      id: 2,
      link: 'https://github.com/thakkarshrey',
      icon: <FontAwesomeIcon icon={faGithub} />,
      label: 'Github'
    },
    {
      id: 3,
      link: 'https://www.instagram.com/thakkarshrey/',
      icon: <FontAwesomeIcon icon={faInstagram} />,
      label: 'Instagram'
    }
  ]
}

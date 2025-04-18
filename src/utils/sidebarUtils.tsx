import { faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faCode, faHouse, faLaptopFile, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarUtils = () => {
  return [
    {
      id: 1,
      title: 'Home',
      link: '/',
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 2,
      title: 'About',
      link: '/about',
      icon: <FontAwesomeIcon icon={faAddressCard} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 3,
      title: 'Experience',
      link: '/experience',
      icon: <FontAwesomeIcon icon={faLaptopFile} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 4,
      title: 'Skills',
      link: '/skills',
      icon: <FontAwesomeIcon icon={faLayerGroup} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 5,
      title: 'Projects',
      link: '/projects',
      icon: <FontAwesomeIcon icon={faCode} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 6,
      title: 'Contact',
      link: '/contact',
      icon: <FontAwesomeIcon icon={faAddressBook} style={{ color: 'var(--white-color)' }} />
    }
  ]
}

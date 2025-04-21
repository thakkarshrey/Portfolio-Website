import { faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faCode, faHouse, faLaptopFile, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarUtils = () => {
  return [
    {
      id: '',
      title: 'Home',
      link: '/',
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 'about',
      title: 'About',
      link: '/about',
      icon: <FontAwesomeIcon icon={faAddressCard} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 'experience',
      title: 'Experience',
      link: '/experience',
      icon: <FontAwesomeIcon icon={faLaptopFile} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 'skills',
      title: 'Skills',
      link: '/skills',
      icon: <FontAwesomeIcon icon={faLayerGroup} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 'projects',
      title: 'Projects',
      link: '/projects',
      icon: <FontAwesomeIcon icon={faCode} style={{ color: 'var(--white-color)' }} />
    },
    {
      id: 'contact',
      title: 'Contact',
      link: '/contact',
      icon: <FontAwesomeIcon icon={faAddressBook} style={{ color: 'var(--white-color)' }} />
    }
  ]
}

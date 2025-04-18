import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/header'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'
import Contact from '../components/sections/contact'
import Footer from '../components/common/footer'
import Skills from '../components/sections/skills'
import FloatingNavbar from '../components/common/floating-navbar'
import Experience from '../components/sections/experience'
import BackgroundWithCanvas from '../components/common/background-with-canvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import './App.css'

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('mode') || 'light')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains('show-animation')) {
              entry.target.classList.add('show-animation')
            }
          } else {
            entry.target.classList.remove('show-animation')
          }
        })
      },
      {
        threshold: [0.1, 0.3]
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('mode', selectedTheme)
    document.documentElement.setAttribute('data-theme', selectedTheme)

    if (inputRef.current) {
      inputRef.current.checked = selectedTheme === 'dark'
    }
  }, [selectedTheme])

  return (
    <BackgroundWithCanvas>
      <div className="toggle-container">
        <input
          ref={inputRef}
          type="checkbox"
          id="toggle-container_btn"
          onChange={() => setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')}
        />
        <label htmlFor="toggle-container_btn" className="toggle-container_label">
          <div className="toggle-container_label-sun">
            <FontAwesomeIcon icon={faSun} fontSize="20" />
          </div>
          <div className="toggle-container_label-moon">
            <FontAwesomeIcon icon={faMoon} fontSize="20" />
          </div>
        </label>
      </div>
      <FloatingNavbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </BackgroundWithCanvas>
  )
}

export default App

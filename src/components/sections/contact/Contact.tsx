import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../common/box'
import Button from '../../common/button'
import { useState } from 'react'
import './Contact.css'
import { useAnimate } from '../../../hooks/useAnimate'
import Footer from '../../common/footer'

type CardProps = {
  id: number
  icon: React.ReactElement
  title: string
  paragraph_01: string
  paragraph_02: string
}

const Contact = () => {
  /* loading dependencies */
  const [loading, setLoading] = useState(false)
  /* loading dependencies */

  const animationClass = useAnimate(100)

  const cardsData = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faVoicemail} />,
      title: 'Email',
      paragraph_01: 'thakkarshrey10.st@gmail.com',
      paragraph_02: ''
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      title: 'Whatsapp',
      paragraph_01: '+91-9712303054',
      paragraph_02: ''
    }
  ]

  /* on submit handler */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setLoading(true)
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)

      formData.append('access_key', `${import.meta.env.VITE_FORM_ACCESS_KEY}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setLoading(false)
        form.reset()
      } else {
        console.log('Error', data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className={`section ${animationClass}`}>
        <Box>
          <div className="contact-container">
            <div>
              <p>Get in touch</p>
              <h2>Contact Me</h2>
            </div>
            <div className="contact-container__content">
              <div className="contact-container__cards">
                {cardsData?.map((element) => {
                  return <Cards key={element.id} {...element} />
                })}
              </div>
              <div className="contact-container__form">
                <form onSubmit={onSubmit} className="contact-container__form-container">
                  <input
                    style={{ '--input-field-i': 1 } as React.CSSProperties}
                    className="input-field input-field-outlined"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                  <input
                    style={{ '--input-field-i': 2 } as React.CSSProperties}
                    className="input-field input-field-outlined"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                  />
                  <textarea
                    style={{ '--input-field-i': 3 } as React.CSSProperties}
                    className="text-area text-area-outlined"
                    name="message"
                    required
                    rows={6}
                    placeholder="Your message"
                  />
                  <Button
                    disabled={loading}
                    style={{ '--input-field-i': 4 } as React.CSSProperties}
                    type="submit"
                    variant="primary"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </section>
      <Footer />
    </>
  )
}

function Cards({ id, icon, title, paragraph_01, paragraph_02 }: CardProps) {
  const email = 'thakkarshrey10.st@gmail.com'
  return (
    <div
      style={{ '--contact-cards-i': id } as React.CSSProperties}
      className="contact-container__card"
    >
      <span className="cards-icon">{icon}</span>
      <h5>{title}</h5>
      <small>
        {paragraph_01} <br />
        {paragraph_02}
      </small>
      {id === 1 ? (
        <a
          aria-label="Send an email"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Send an email{' '}
        </a>
      ) : (
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/919712303054"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Chat on whatsapp{' '}
        </a>
      )}
    </div>
  )
}

export default Contact

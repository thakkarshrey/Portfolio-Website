import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css"
import Box from "../../common/box";
import Button from "../../common/button";
import Input from "../../common/input";
import TextArea from "../../common/textArea";

type Props = {};

type CardProps = {
  icon: React.ReactElement
  title: string
  paragraph_01: string
  paragraph_02: string
}

const Contact = (props: Props) => {

  const cardsData = [
    {
      icon: <FontAwesomeIcon icon={faVoicemail} />,
      title: "Email",
      paragraph_01: "thakkarshrey10.st@gmail.com",
      paragraph_02: ""
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      title: "Whatsapp",
      paragraph_01: "+91-9712303054",
      paragraph_02: ""
    }
  ];

  return (
    <section id="contact" className="section">
      <Box>
        <div className="contact-container">
          <div>
            <p>Get in touch</p>
            <h2>Contact Me</h2>

          </div>
          <div className="contact-container__content">
            <div className="contact-container__cards">
              {
                cardsData?.map((element) => {
                  return <Cards {...element} />
                })
              }
            </div>
            <div className="contact-container__form">
              <div className="contact-container__form-container">
                <Input name="name" placeholder="Your full name" />
                <Input name="name" placeholder="Your email" />
                <TextArea name="message" placeholder="Your message" rows={6} />
                <Button variant="primary">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

function Cards({ icon, title, paragraph_01, paragraph_02 }: CardProps) {
  return (
    <div>
      <span className="cards-icon">
        {icon}
      </span>
      <h5>
        {title}
      </h5>
      <small>{paragraph_01} <br />{paragraph_02}</small>
    </div>
  )
}

export default Contact;

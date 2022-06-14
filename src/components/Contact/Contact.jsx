import { useState } from 'react'
import './Contact.scss'
import { useTranslation } from "react-i18next";
import Bkg from '../../assets/cool-background-triang.png'


function Contact() {

  const { t } = useTranslation();
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={Bkg} alt="Contact me"/>
      </div>
      <div className="right">
        <h2>{t("Contact")}</h2>
        <form 
        onSubmit={handleSubmit} 
        action="mailto:thegera4@hotmail.com"
        method="post"
        encType="text/plain">
          <input type="email" placeholder="Email"/>
          <textarea placeholder={t("Message")}></textarea>
          <button type="submit">{t("Send")}</button>
          {message && <span>{t("Asap")}</span>}
        </form>
      </div>
    
    </div>
  )
}

export default Contact
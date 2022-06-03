import { useState } from 'react'
import './Contact.scss'

function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TIRGN4-UmhMKqS6I6NN7x4hBQ_-yY24X6Q&usqp=CAU" 
        alt="Contact me"/>
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for you message! I'll reply ASAP.</span>}
        </form>
      </div>
    
    </div>
  )
}

export default Contact
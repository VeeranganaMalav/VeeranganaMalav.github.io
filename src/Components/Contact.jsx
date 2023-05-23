import React from 'react'
import "../css/Contact.css"

const Contact = () => {
  return (
    <div id="contact">
      <h1>Get in touch 💬</h1>
      <p>Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello! I'm always excited to connect with like-minded individuals, businesses, and organizations who are passionate about technology and innovation.</p>
      <div className="contact-links">
        <a href="https://github.com/VeeranganaMalav" className="contact-icons" id="contact-github">
          <i class="fa-brands fa-github"></i>
          <p>github.com/VeeranganaMalav</p>
        </a>
        <a href="https://www.linkedin.com/in/veeranganamalav14/" className="contact-icons" id="contact-linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
          <p>linkedin.com/in/veeranganamalav14</p>
        </a>
        <a href="mailto:veeranganamalav01@gmail.com" className="contact-icons" id="contact-email">
          <i class="fa-solid fa-envelope"></i>
          <p>veeranganamalav01@gmail.com</p>
        </a>
        <a href="#contact" className="contact-icons" id="contact-phone">
          <i class="fa-solid fa-phone"></i>
          <p>+91 8209714413</p>
        </a>
      </div>
      <div id="resume">
        <a href="https://drive.google.com/uc?id=1pXXENn_m-X9xgEXNGgnFWM7DI7zPTi2N&export=download" id="resume-link-1" target="_blank" rel="noreferrer">
          <button className="resume-btn" id="resume-button-1">Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Contact
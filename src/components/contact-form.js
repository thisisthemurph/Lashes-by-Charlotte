import React from "react"

import "../styles/contact-form.scss"

const ContactForm = () => (
  <form className="form" method="POST" action="https://formspree.io/xlepnkwg">
    <p>
      Feel free to contact me with any questions! Leave your email or telephone number and I'll get
      back to you as soon as possible.
    </p>
    <div className="form__input">
      <input type="text" id="name" name="name" placeholder=" " required />
      <label htmlFor="name">Name</label>
    </div>
    <div className="form__input">
      <input
        type="email"
        id="email"
        name="email"
        pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
        placeholder=" "
        required
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="form__input">
      <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder=" " required />
      <label htmlFor="phone">Number</label>
    </div>
    <div className="form__input">
      <textarea rows="5" id="message" name="message" placeholder=" " required></textarea>
      <label htmlFor="message">Message</label>
    </div>
    <div className="form__button">
      <button type="submit" className="btn">
        Send
      </button>
    </div>
  </form>
)

export default ContactForm

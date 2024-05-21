import React from 'react'
import "./ContactUs.css"
import ScrollToTop from '../scrollToTop/ScrollToTop'

const ContactUs = () => {
  return (
    <>
    <ScrollToTop />
    <div class="contactUs">
        <div class="hero-section">
          <div class="hero-overlay">
            <h1 class="hero__overlay--text">Contact Us</h1>
          </div>
        </div>

        <div className="contactUs__small--content">
          <p className="small__content--text">
          We're here to help! Whether you have a question, feedback, or need
            support, we're all ears and ready to assist you. Reach out to us
            through any of the channels below, and we'll make sure to get back
            to you as soon as possible.
          </p>
        </div>

        <div class="contact-form">
          <form action="#" method="post">
            <div class="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-text"
                placeholder="First Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Last Name"
                required
                className="input-text"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                id="email"
                name="email"
                placeholder="Phone"
                required
                className="input-text"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="input-text"
              />
            </div>
            <div class="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className="textarea"
              ></textarea>
            </div>
            <div class="contact__submit--btn">
              <input type="submit" value="Submit" class="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs
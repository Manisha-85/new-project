import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <img src="Logo.png" alt="" className="footer-logo" />
        <h4>Vigomerge</h4>
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">Write your Message</p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email address" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

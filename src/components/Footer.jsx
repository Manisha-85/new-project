import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
            <img src="Logo.png" alt="" className="footer-logo" />
        <h4>Vigomerge</h4>
          <p>
            We are providing services and solutions <br />
            Pune based company in Maharashtra India.
          </p>
          <div className="footer-badges ">
            <img src="/images/google.png" alt="Google" />
            <img src="/images/score.png" alt="Score" />
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Projects</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact us</h4>
          <p>Baner Pune Maharashtra 411027</p>
          <p>+91 9529872361</p>
          <p>info@vigomerge.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
           <div className="icon-circle">f</div>
           <div className="icon-circle">in</div>
           <div className="icon-circle">i</div>
        </div>
        <p>
          Copyright © 2024 Vigomerge Technology Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

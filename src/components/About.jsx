// src/components/AboutSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left - Image */}
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
              alt="Team meeting"
              className="img-fluid rounded shadow-sm"
            />
          </Col>

          {/* Right - Text */}
          <Col md={6}>
            <p className="about-label">About us</p>
            <h2 className="fw-bold">
              Empowering Your Vision with Cutting-Edge Software Solutions
            </h2>
            <p className="about-desc">
              We’re top notch Award Winning Agency. We are Experienced in Providing
              Innovative Creative Services to Our Clients Worldwide.
            </p>

            <ul className="about-list">
              <li>Advanced Innovative Agency</li>
              <li>Web Architect and Development</li>
            </ul>

            {/* Stats */}
            <Row className="mt-4">
              <Col xs={4}>
                <div className="stat-box bg-dark-blue">
                  
                  <p>Expert Team</p>
                  <h4>3K+</h4>
                  <p>complete project</p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="stat-box bg-orange">
                 
                  <p>Branches</p>
                   <h4>3K+</h4>
                   <p>complete sector</p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="stat-box bg-dark-blue">
                  
                  <p>Expert Team</p>
                  <h4>3K+</h4>
                  <p>complete project</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

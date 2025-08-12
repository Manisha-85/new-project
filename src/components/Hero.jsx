import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from '../assets/Hero img.png'; 
const Hero = () => {
  return (
    <section className="hero-section py-5" style={{ backgroundColor: '#f3e8ff', marginTop: '70px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="text-muted">Home</h5>
            <h1>
              Great <span className="text-primary">Product</span> is <br />
              <strong>built by great teams</strong>
            </h1>
            <p className="text-muted">
              We help build and manage a team of world-class developers to bring your vision to life.
            </p>
            <Button variant="primary" className="me-3">Let’s get started!</Button>
            <Button variant="outline-primary">Let’s get started!</Button>
          </Col>
          <Col md={6} className="text-center">
            <img src={heroImg} alt="Hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
 // custom styles

const ServicesSection = () => {
  return (
    <div className="services-overview py-5">
      <Container>
        <p className="section-subtitle">Services</p>
        <h3 className="section-title">Services Overview</h3>
        <p className="section-desc">
          We will bring the breadth of our experience and industry knowledge to help you succeed.
        </p>

        <Row className="mt-5">
          <Col md={4} sm={6} className="mb-4">
            <Card className="service-card text-center">
              <img
                src="/images/AI.png"
                alt="AI Services"
                className="service-icon"
              />
              <Card.Body>
                <Card.Title>AI Services</Card.Title>
                <Card.Text>
                  Leverage agile frameworks to provide robust high-level overviews.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="service-card text-center">
              <img
                src="/images/SD.png"
                alt="Software Development"
                className="service-icon"
              />
              <Card.Body>
                <Card.Title>Software Development</Card.Title>
                <Card.Text>
                  Bring to the table survival strategies to ensure proactive domination.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="service-card text-center">
              <img
                src="/images/DO.png"
                alt="DevOps"
                className="service-icon"
              />
              <Card.Body>
                <Card.Title>DevOps</Card.Title>
                <Card.Text>
                  Grow the holistic worldview of disruptive innovation workspace.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;

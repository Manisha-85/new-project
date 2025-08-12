// src/components/ProjectsSection.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Tech Website Solution",
      category: "Technology",
      img: "/images/Office1.png",
    },
    {
      id: 2,
      title: "Flashost",
      
      img: "/images/office2.png",
    },
    {
      id: 3,
      title: "Flashost",
     
      img: "/images/office3.png",
    },
    {
      id: 4,
      title: "Flashost",
      
      img: "/images/office4.png",
    },
    {
      id: 5,
      title: "Flashost",
      
      img: "/images/office5.png",
    },
    {
      id: 6,
      title: "Flashost",
      
      img: "/images/office6.png",
    },
  ];

  return (
    <section className="projects-section py-5">
      <Container>
        <p className="section-label">Our Projects</p>
        <h2 className="fw-bold">Recently Completed Creative Works</h2>

        <Row className="mt-4 g-4">
          {projects.map((project) => (
            <Col md={4} sm={6} key={project.id}>
              <Card className="project-card border-0 shadow-sm">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={project.img} className="rounded" />
                </div>
                <Card.Body className="p-2">
                  <h6 className="mb-0">{project.title}</h6>
                  {project.category && (
                    <small className="text-muted">{project.category}</small>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;

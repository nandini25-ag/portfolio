import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title className="project-title">
                  Company Name: Shoppeal Tech
                </Card.Title>
                <Card.Subtitle className="mb-3 text">
                  Role: Frontend Developer
                </Card.Subtitle>
                <Card.Text className="project-text">
                  Developed a robust Learning Management System (LMS) website,
                  resulting in a remarkable 25% increase in overall user impact.
                  Utilized React.js, Node.js, and MongoDB to deliver a seamless
                  and feature-rich user experience, leading to improved user
                  satisfaction. Led the UI/UX design process, applying best
                  practices to enhance the overall user experience on the LMS
                  website. Established a local backend using Node.js and MongoDB,
                  enabling efficient data retrieval and updates. Implemented CRUD
                  operations to manage user data, resulting in streamlined
                  processes and improved data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

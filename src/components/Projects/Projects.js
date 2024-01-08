import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Kannada from "../../Assets/Projects/kannada.png"
import mindology from "../../Assets/Projects/mindology.png";
import sacred from "../../Assets/Projects/sacred.png"
import textutils from "../../Assets/Projects/textutils.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/46851135/232449785-1c9789b2-f99e-4c3f-86e2-f53697bc8b28.jpg"}
              isBlog={false}
              title="OpenMind"
              description="A chat app which helps you to have better communication with people with the help of OpenAI machinery"
              ghLink="https://github.com/The-Unleashed-Club/openMind"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kannada}
              isBlog={false}
              title="Kannada-community"
              description="Developed a community website with essential pages (Home, About Us, Contact Us, Events, Login, Signup), focusing on user interaction and providing a foundational digital hub for community engagement."
              ghLink="https://github.com/nandini25-ag/Kannada-balaga-community"
              demoLink="https://kannada-balaga-community-e3s3.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindology}
              isBlog={false}
              title="Mindology"
              description="Mindology is a platform or service designed to help individuals explore and understand their personalities in a comprehensive way. The focus seems to be on leveraging advanced personality detection technology to unlock unique strengths and provide deep insights into various personality traits."
              ghLink=""
              demoLink="https://mindology.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sacred}
              isBlog={false}
              title="Sacred Chank Productions"
              description="A platform dedicated to the distribution of Kannada movies and the latest news articles, providing a comprehensive hub for enthusiasts and cinephiles."
              ghLink=""
              demoLink="https://sacredchankproductions.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="TextUtils, a versatile application offering a comprehensive suite of text manipulation tools, including features like text formatting,
case conversion, and string manipulation functionalities."
              ghLink="https://github.com/nandini25-ag/Myutils"
              demoLink="https://texttweaks.netlify.app/"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

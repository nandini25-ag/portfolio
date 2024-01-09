import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate about Software Development, 🤷‍♂️
              <br />
              <br />
              I've mastered classics like
              <i>
                <b className="purple">
                  {" "}
                  Proficient in Java, Python, and the latest web technologies.{" "}
                </b>
              </i>
              <br />
              <br />
              My expertise lies in crafting innovative web technologies and
              products using React.js, React Native and Next.js. &nbsp;
              <br />
              <br />
              <i>
                <b className="purple">Let's code the future together! 🚀</b>
              </i>
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nandini25-ag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nandini25agarwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nandini25agarwal@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <FaMessage />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

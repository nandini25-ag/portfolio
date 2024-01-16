import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Nandini Agarwal</span>, a results-driven Software Engineer and Full Stack Developer with a strong foundation in Computer Science. My expertise spans both frontend and backend technologies, allowing me to craft comprehensive solutions that seamlessly integrate user-centric design with robust functionality. I am proficient in languages like Java, Python, and more, enabling me to approach projects with a diverse skill set. From designing intuitive user interfaces with React.js to developing scalable server-side logic using Node.js, I thrive on delivering top-notch solutions across the entire development lifecycle. Whether it's optimizing database performance, architecting scalable systems, or implementing innovative features, I am committed to excellence. Let's collaborate and transform your concepts into impactful software applications!
            <br />
            <br />
            Beyond coding, I am dedicated to continuous learning, staying abreast of the latest industry trends to ensure my solutions align with the dynamic landscape of software development. I value work-life balance and take time to recharge by pursuing my hobbies, like reading and travelling. A balanced mind leads to creative ideas and better productivity.
          </p>
          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

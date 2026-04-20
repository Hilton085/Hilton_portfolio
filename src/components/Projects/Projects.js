import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import pongtrack from "../../Assets/Projects/pongtrack.PNG";


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
              imgPath={chatify}
              isBlog={false}
              title="AgriGabay"
              description="Agricultural Tool Mobile Application done using Kotlin. It has four features: Crop Information, Expense Tracker, Crop Converter, and Green Scan AI."
              ghLink="https://github.com/Hilton085/AgriGabay"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pongtrack}
              isBlog={false}
              title="PongTrack"
              description="Inventory Management System for Pongtao Car Accessories. It is a web application built using Bootstrap for the frontend and Javascript for the backend. It allows users to manage inventory, track sales, and generate reports."
              ghLink="https://github.com/Hilton085/pongtao-cam"
              demoLink="#"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

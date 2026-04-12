import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React from "react";

function Experience() {
    return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="align-items-center">
      <Col md={6} className="experience-card">
        <Card className="quote-card-view">
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              <strong className="purple">Intern/OJT - Mobile Application Developer | AgriGabay</strong>
            </Card.Title>
            <Card.Subtitle className="mb-2" style={{ color: "white" }}>
              Precision Agriculture | Jan 2026 - Present
            </Card.Subtitle>
            <Card.Text style={{ color: "white", textAlign: "justify" }}>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: 0, textAlign: "justify" }}>
                <li>Developed a mobile application using Kotlin focused on agricultural assistance and productivity</li>
                <li>Integrated four core features: unit converter, crop information module, expense tracker, and AI-powered decision support</li>
                <li>Implemented an AI model using YOLOv8 and TensorFlow for crop detection and classification</li>
                <li>Designed a user-friendly interface and optimized performance for real-world usability</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;
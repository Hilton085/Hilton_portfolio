import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Github from "../../Assets/TechIcons/github.svg";
import AndroidStudio from "../../Assets/TechIcons/androidstudio.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={AndroidStudio} alt="Android Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Github} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">Github</div>
      </Col>

    </Row>
  );
}

export default Toolstack;

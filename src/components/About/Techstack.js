import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Bootstrap from "../../Assets/TechIcons/bootstrap.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Laravel from "../../Assets/TechIcons/laravel.svg";
import CSS from "../../Assets/TechIcons/css.svg";
import HTML from "../../Assets/TechIcons/html.svg";
import Kotlin from "../../Assets/TechIcons/kotlin.svg";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="html" />
        <div className="tech-icons-text">HTML</div>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="css" />
        <div className="tech-icons-text">CSS</div>
      </Col>
    
    <Col xs={4} md={2} className="tech-icons">
        <img src={Kotlin} alt="kotlin" />
        <div className="tech-icons-text">Kotlin</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="laravel" />
        <div className="tech-icons-text">Laravel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="boostrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
    </Row>
  );
}

export default Techstack;

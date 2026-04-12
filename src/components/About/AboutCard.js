import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mark Hilton Dulnuan</span>{" "}
            <br />
            I’m currently pursuing my degree of {" "}
            <span className="purple">Bachelor of Science in Information Technology</span> at{" "}
            <span className="purple">Benguet State University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Hobbies 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hesitation is Defeat!"{" "}
          </p>
          <footer className="blockquote-footer">Isshin Ashina, Sekiro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

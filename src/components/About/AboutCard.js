import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Keshav JhunJhunwala </span>
            from <span className="purple"> Vellore, Tamil Nadu India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science and Engineering at VIT Vellore.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring financial markets and investments 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology with purpose, and investments with vision!"{" "}
          </p>
          <footer className="blockquote-footer">Keshav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


const projectData = [
  {
    imgPath: process.env.PUBLIC_URL + "/hostel.png",
    title: "VIT Hostel Portal",
    description: "Developing a system to simplify hostel management and provide essential student tools. Built with Next.js and designed in Figma. (Ongoing)",
    demoLink: "https://hostels.vitrendz.in/",
  },
  {
  imgPath: process.env.PUBLIC_URL + "/messit.png",
  title: "Messit",
  description: "A full-stack mess management system that simplifies hostel dining operations through digital meal tracking, dynamic menu management, and real-time updates. Includes an intuitive dashboard for users and admins, ensuring efficient coordination and improved user experience.",
  demoLink: "https://your-messit-demo-link.com/",
},
  {
    imgPath: process.env.PUBLIC_URL + "/vinhack.png",
    title: "VinHack",
    description: "An innovative hackathon platform built with modern web technologies. Features include event management, team collaboration, real-time updates, and project showcasing capabilities.",
    demoLink: "https://vinhack.vinnovateit.com/",
  },
  {
  imgPath: process.env.PUBLIC_URL + "/finecho.png",
  title: "Finecho",
  description: "A modern AI-powered finance management platform designed to help users track expenses, analyze spending patterns, and gain smart financial insights. Features include intuitive dashboards, real-time data visualization, and intelligent recommendations for better money management.",
  demoLink: "https://github.com/keshavjjwala/FinEcho",
},
  {
  imgPath: process.env.PUBLIC_URL + "/terravo.jpg",
  title: "Terravo",
  description: "A modern platform focused on environmental insights and smart land management solutions. It provides users with intuitive tools to analyze data, monitor resources, and make informed decisions through a clean and interactive interface.",
  demoLink: "https://github.com/keshavjjwala/Terravo",
},
  
]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "var(--subtitle-color)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                isBlog={project.isBlog}
                isOngoing={project.isOngoing}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

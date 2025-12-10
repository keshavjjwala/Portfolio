import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectData = [
  {
    imgPath: process.env.PUBLIC_URL + "/vinhack.png",
    title: "VinHack",
    description: "An innovative hackathon platform built with modern web technologies. Features include event management, team collaboration, real-time updates, and project showcasing capabilities.",
    demoLink: "https://vinhack.vinnovateit.com/",
  },
  {
    imgPath: "https://media.licdn.com/dms/image/v2/C560BAQHYzd8xATDCrQ/company-logo_200_200/company-logo_200_200/0/1630646009283/v_innovate_it_logo?e=1767225600&v=beta&t=OGBqSpCVRBHYBi2HhXXkjESaT2koQbe0Tmwgcf_j3O4",
    title: "VinnovateIT ",
    description: "A modern web development project showcasing cutting-edge technologies and design practices. Features responsive layouts, interactive components, and optimized performance.",
    ghLink: "https://github.com",
    demoLink: "https://web25.vinnovateit.com/",
  },
  {
    imgPath: editor,
    title: "VIT Hostel Portal",
    description: "Developing a system to simplify hostel management and provide essential student tools. Built with Next.js and designed in Figma. (Ongoing)",
    demoLink: "#",
    isOngoing: true,
  },
  {
    imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDN70AUd2FySlGwwd6bI-tGpzROqNVWOy_g&s",
    title: "Etech",
    description: "Project made totally in Next.js focusing on frontend only. Features modern UI, responsive design, and interactive learning components. A comprehensive educational technology platform with smooth user experience.",
    demoLink: "https://edtech-topaz.vercel.app/",
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

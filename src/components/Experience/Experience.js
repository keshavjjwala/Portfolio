import React from "react";
import ExperienceCard from "./ExperienceCard";
import "../../App.css";
import "./experience.css";

function Experience() {
  
  const experiences = [
    {
      company: "VITrendz",
      role: "Frontend Developer",
      duration: "Aug 2025-Present",
      description: [
        "Developed and maintained user interfaces using React.js.",
        "Collaborated with designers and backend developers to deliver high-quality products.",
        "Implemented responsive design and improved website performance."
      ]
    },
    {
      company: "VinnovateIT",
      role: "UI/UX DESIGNER",
      duration: "April 2025- Present",
      description: [
        "Conducted user research and created user personas.",
        "Designed wireframes and prototypes for web and mobile applications.",
        "Collaborated with developers to implement design solutions."
      ]
    },
    {
        company: "JJWALAINVESTMENTS",
        role: "PARTNER",
        duration: "MAY 2024 - PRESENT",
        description: [
            "Managing the overall operations and strategic direction of the investment firm."
        ]
    }
  ];

  return (
    <div className="experience-section">
      <h1 className="project-heading">
        <strong className="purple">Work Experience</strong>
      </h1>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experience;

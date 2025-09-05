import React from "react";
import PropTypes from "prop-types";
import "../../App.css";

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <h2>{experience.role}</h2>
      <h3>{experience.company}</h3>
      <p><strong>Duration:</strong> {experience.duration}</p>
      <ul>
        {experience.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ExperienceCard;

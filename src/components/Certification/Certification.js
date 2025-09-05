import React from "react";
import "./certification.css";

const certifications = [
  {
    title: "National Institute of Securities Markets",
    org: "NISM",
    logo: "https://online.nism.ac.in/images/logos/NISM.png",
    bg: "#b76c6c",
    link: "https://drive.google.com/file/d/1b8xMV0PEJNLRVi1CY5GLfC5j2MTnKVZj/view?usp=sharing"
  },
  {
    title: "Graphic Design",
    org: "UDEMY",
    logo: "https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/udemy-logo.svg",
    bg: "#555",
    link: "https://drive.google.com/file/d/1lnpHgBvhfBrslb2p8hJfy0UrR_da-f1m/view?usp=sharing"
  },
  {
    title: "Full Stack AI",
    org: "UDEMY",
    logo: "https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/udemy-logo.svg",
    bg: "#7ecb8f",
    link: "https://drive.google.com/file/d/1_yhgqxWUkiY5JB0_vdoykGxj15Z-8M1m/view?usp=sharing"
  },
  {
    title: "CURSOR BOOTCAMP",
    org: "UDEMY",
    logo: "https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/udemy-logo.svg",
    bg: "#8ec0e4",
    link: "https://drive.google.com/file/d/1hV9-CK14f14pTExkO_XzPmjAzANFZ2xm/view?usp=sharing"
  },
];

function Certification() {
  return (
    <div className="certification-section">
      <h1 className="project-heading">
        <strong className="purple">Certifications</strong>
      </h1>
      <div className="certification-grid">
        {certifications.map((cert, idx) => (
          <a
            className="cert-card"
            key={idx}
            style={{ background: cert.bg, textDecoration: "none" }}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-logo-wrap">
              <img src={cert.logo} alt={cert.org} className="cert-logo" />
            </div>
            <div className="cert-info">
              <div className="cert-title">{cert.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certification;

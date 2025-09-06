import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";




function ResumeNew() {
  // Use either a Google Drive preview link or a direct public file link
  // const pdf = "https://drive.google.com/file/d/1TeIvT3Tescq7OJxdcoBYazH4WW3aMulm/preview";
  const pdf = process.env.PUBLIC_URL + "/resume.pdf";
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", minHeight: "60vh", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", marginBottom: "2rem" }}
            >
              <AiOutlineDownload />
              &nbsp;Download / View CV
            </Button>
            <p style={{ color: "#bbb", marginTop: "2rem" }}>
              If the PDF does not open in your browser, it will be downloaded automatically.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

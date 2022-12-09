import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const FooterUniversityName = () => {
  const [stopMotion, setStopMotion] = useState(false);
  const motionState = () => {
    stopMotion ? setStopMotion(false) : setStopMotion(true);
  };
  return (
    <Container
      fluid
      className="university-name-container d-flex flex-column flex-xl-row align-items-center justify-content-center"
    >
      <h1
        className={` py-3 fw-bold text-center ${
          stopMotion ? "university-name-alt" : "university-name"
        }`}
      >
        {" "}
        Computer Science and Engineering, MBSTU
      </h1>
      <Button
        className="ms-4 mb-2 mb-xl-0"
        variant="light"
        onClick={motionState}
      >
        {stopMotion ? "Start" : "Stop"}
      </Button>
    </Container>
  );
};

export default FooterUniversityName;

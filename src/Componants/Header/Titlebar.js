import React from "react";
import { Container } from "react-bootstrap";
import mbstuBanner from "../../images/mbstu-banner-1.jpg";

const Titlebar = () => {
  return (
    <Container fluid className="d-none d-lg-block">
      <img
        role="heading"
        aria-level="1"
        width="100%"
        src={mbstuBanner}
        alt="CSE, MBSTU name"
      />
    </Container>
  );
};

export default Titlebar;

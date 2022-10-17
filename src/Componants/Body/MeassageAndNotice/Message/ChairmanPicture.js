import React from "react";
import { Container, Image } from "react-bootstrap";
import chairman from "../../../../images/chairmain-img.jpg";

const ChairmanPicture = () => {
  return (
    <Container fluid="true" className="mb-3 mb-md-0">
      <Image
        height="252px"
        width="198px"
        fluid="true"
        className="chairman-img rounded"
        src={chairman}
        alt="Current Chairman Person"
      />
    </Container>
  );
};

export default ChairmanPicture;

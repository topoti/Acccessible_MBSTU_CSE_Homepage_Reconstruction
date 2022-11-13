import { faArrowRight, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { publicationsData } from "../../../utils/publicationsData";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Publication from "./Publication";

const Publications = () => {
  return (
    <Container>
      <SectionTitle
        icon={faPencil}
        title="Publications"
        titleLight="Top"
        label="pencil icon"
      />
      {publicationsData.map((publication) => (
        <Publication key={publication.id} publication={publication} />
      ))}
      <div className="d-flex justify-content-center my-4">
        <Button className="border-0 publication-btn text-uppercase">
          <span className="view-all-publications">View All Publications</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            aira-label="notice button arrow"
          />
        </Button>
      </div>
    </Container>
  );
};

export default Publications;

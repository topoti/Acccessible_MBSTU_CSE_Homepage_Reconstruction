import { faPencil } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";
import { publicationsData } from "../../../utils/publicationsData";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ViewAll from "../../Shared/ViewAll/ViewAll";
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
      <div>
        {publicationsData.map((publication) => (
          <Publication key={publication.id} publication={publication} />
        ))}
      </div>
      <ViewAll title="View All Publications" />
    </Container>
  );
};

export default Publications;

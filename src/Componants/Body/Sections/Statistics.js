import React from "react";
import { Container, Row } from "react-bootstrap";
import { statsData } from "../../../utils/statsData";
import Statistic from "../Stats/Statistic";

const Statistics = () => {
  return (
    <Container
      fluid="true"
      className="mx-0 pb-5 my-5 mt-xl-0 stat-container"
    >
      <Row className="stat-container-row">
        {statsData.map((stat) => (
          <Statistic statistic={stat} key={stat.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Statistics;

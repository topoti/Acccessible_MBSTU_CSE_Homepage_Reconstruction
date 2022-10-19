import React from "react";
import { Container, Row } from "react-bootstrap";
import { statsData } from "../../../utils/statsData";
import Statistic from "../Stats/Statistic";

const Statistics = () => {
  return (
    <Container fluid="true" className="p-5 pt-0 my-5 mt-xl-0 stat-container">
      <Row className="justify-content-center">
        {statsData.map((stat) => (
          <Statistic statistic={stat} key={stat.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Statistics;

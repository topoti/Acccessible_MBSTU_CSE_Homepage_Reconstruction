import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";

const Statistic = ({ statistic }) => {
  const { title, stat } = statistic;
  return (
    <Col
      lg={3}
      sm={6}
      xs={12}
      className="d-flex flex-column align-items-center gy-2 justify-content-center pt-5 "
    >
      <div className="stat-check-icon-container d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="stat-check-icon"
          aria-label="check icon"
        />
      </div>

      <div className="stat-info text-white d-flex align-items-center flex-column mx-4 px-3 pb-2 rounded-2 shadow mt-4">
        <div className="stat-number fw-bold">{stat}+</div>
        <div>{title}</div>
      </div>
    </Col>
  );
};

export default Statistic;

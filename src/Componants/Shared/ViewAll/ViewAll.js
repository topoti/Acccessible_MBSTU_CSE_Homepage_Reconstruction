import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const ViewAll = ({ title }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <Button className="border-0 publication-btn text-uppercase">
        <span className="view-all-publications">{title}</span>
        <FontAwesomeIcon icon={faArrowRight} aira-label="right arrow icon" />
      </Button>
    </div>
  );
};

export default ViewAll;

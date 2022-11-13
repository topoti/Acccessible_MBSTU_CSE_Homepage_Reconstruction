import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

const Publication = ({ publication }) => {
  const { title, description, link} = publication;
  
  return (
    <Card className=" publication-container">
      <Card.Body >
        <Card.Title className="publication-title text-white rounded-1 fw-bold p-1 d-inline-block">{title}</Card.Title>
        <Card.Text className="publication-desp mb-1">
          {description.map((desp) => (
            <span key={desp.id}>{desp.text}</span>
          ))}
        </Card.Text>
        <Card.Link href={link} className="text-decoration-none publication-link">
          <FontAwesomeIcon className="publication-link-icon me-1" icon={faUpRightFromSquare} aria-label="external link icon"/>
          External Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Publication;

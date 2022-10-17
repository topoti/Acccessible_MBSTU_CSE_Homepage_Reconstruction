import { faArrowRight, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Notices = ({ notice }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="mb-1 noticeboard-date">
          <FontAwesomeIcon
            className="pe-1 noticeboard-thumbtack"
            icon={faThumbTack}
            aira-label="notice thumbtick"
          />
          {notice.date}
        </Card.Text>
        <Card.Title className="notice-title mb-0"> {notice.title} </Card.Title>
        <div className="d-flex align-items-center">
          <Button className="noticeboard-view-btn p-0">View Notice</Button>
          <FontAwesomeIcon
            icon={faArrowRight}
            aira-label="notice button arrow"
            className="mx-3"
          />
          <Button className="noticeboard-download-btn p-0">Download</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Notices;

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { noticesData } from "../../../../utils/noticesData";
import Notices from "./Notices";

const NoticeBoard = () => {
  return (
    <Container fluid="true" className="noticeboard-container rounded-1 ">
      <div className="noticeboard-title-container">
        <h3 className="noticeboard-title text-uppercase text-white mb-0">
          notice board
        </h3>
      </div>
      <div>
        {noticesData.map((notice) => (
          <Notices notice={notice} key={notice.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Button className="view-notices-btn align-items-center d-flex p-3">
          <span className="view-all-notices">View All Notices</span>
          <FontAwesomeIcon
            className="notice-btn-arrow-icon"
            icon={faArrowRight}
            aira-label="notice button arrow"
          />
        </Button>
      </div>
    </Container>
  );
};

export default NoticeBoard;

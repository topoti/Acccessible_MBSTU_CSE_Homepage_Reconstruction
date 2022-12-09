import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterInfo = () => {
  return (
    <Container fluid className="footer-background p-4">
      <Container>
        <Row className="text-white">
          <Col sm={6} lg={3}>
            <header className="fw-bold mb-4">Contact</header>
            <img
              src="https://cse.mbstu.ac.bd/front/theme1/images/default/logo.png"
              alt="department logo"
              width="165px"
            ></img>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faEnvelope}
                aria-label="email address"
              />
              <span> cse@mbstu.ac.bd</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faMap}
                aria-label="location"
              />
              <span> Santosh, Tangail, Bangladesh</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faFacebook}
                aria-label="facebook page"
              />
            </p>
          </Col>
          <Col sm={6} lg={3}>
            <header className="fw-bold mb-4">About</header>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Message from Department</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Message from Chairman</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> History of CSE, MBSTU</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Why CSE, MBSTU?</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Our Mission and Vision</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Achievements</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Facilities</span>
            </p>
          </Col>
          <Col className="mt-3 mt-lg-0" sm={6} lg={3}>
            <header className="fw-bold mb-4">Academic</header>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Undergraduate Program</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Graduate Program</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Professional Program</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Others Program</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Our Mission and Vision</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Undergraduate Admission</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Graduate Admission</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Undergraduate Curriculum</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Graduate Curriculum</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Calendar</span>
            </p>
          </Col>
          <Col className="mt-3 mt-lg-0" sm={6} lg={3}>
            <header className="fw-bold mb-4">Useful Links</header>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Login</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Publications</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> News</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Notice</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Project</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> Article</span>
            </p>
            <p>
              <FontAwesomeIcon
                className="me-2"
                icon={faAngleRight}
                aria-label="right angle right"
              />
              <span> FAQ</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FooterInfo;

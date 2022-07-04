import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  faCircleQuestion,
  faEnvelope,
  faLocationDot,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Topbar = () => {
  return (
    <Navbar
      bg="light"
      className="d-none d-lg-block px-5"
      style={{ paddingBottom: "5px", paddingTop: "5px" }}
    >
      <Container
        className="d-flex justify-content-around"
        style={{ height: "25px", fontSize: "14px" }}
      >
        <Nav className="d-flex align-items-center">
          <Nav.Link
            className="link"
            target="_blank"
            href="mailto:cse@mbstu.ac.bd"
            tabIndex="1"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              className="me-2"
              aria-label="send email at cse@mbstu.ac.bd"
              icon={faEnvelope}
            />
            <span className="me-2">cse@mbstu.ac.bd</span>
          </Nav.Link>
          <span className="fw-lighter">|</span>
          <Nav.Link
            className="link"
            target="_blank"
            href="https://goo.gl/maps/r1ybUXG3DqJDq7Me6"
            // rel="noreferrer"
            tabIndex="2"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              className="me-2"
              aria-label="google map location pin of MBSTU"
              icon={faLocationDot}
            />
            <span className="me-4">Santosh, Tangail, Bangladesh</span>
          </Nav.Link>
          <span className="fw-lighter">|</span>
          <Nav.Link
            className="link"
            target="_blank"
            tabIndex="3"
            href="https://www.facebook.com/cse.mbstu.11"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              className="me-2"
              aria-label="facebook page link of CSE,MBSTU"
              icon={faFacebookF}
            />
          </Nav.Link>
          <span className="fw-lighter">|</span>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Nav.Link
            className="link"
            target="_blank"
            tabIndex="4"
            href="https://cse.mbstu.ac.bd/faq"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              className="me-2"
              aria-label="frequently asked question"
              icon={faCircleQuestion}
            />
            <span className="me-2">FAQ</span>
          </Nav.Link>
          <span className="fw-lighter">|</span>
          <Nav.Link
            className="link"
            target="_blank"
            tabIndex="5"
            href="https://cse.mbstu.ac.bd/login"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              className="mx-2"
              aria-label="login"
              icon={faLock}
            />
            <span>Login</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;

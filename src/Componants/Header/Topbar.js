import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
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
    <nav>
      <Container fluid className="topbar d-flex">
        <div>
          <a tabIndex="1" href="mailto:cse@mbstu.ac.bd">
            <FontAwesomeIcon
              aria-label="send email at cse@mbstu.ac.bd"
              icon={faEnvelope}
            />
            <span>cse@mbstu.ac.bd</span>
          </a>
          <a
            target="_blank"
            href="https://goo.gl/maps/r1ybUXG3DqJDq7Me6"
            rel="noreferrer"
            tabIndex="2"
          >
            <FontAwesomeIcon
              aria-label="google map location pin of MBSTU"
              icon={faLocationDot}
            />
            Santosh, Tangail, Bangladesh
          </a>
          <a tabIndex="3" href="https://www.facebook.com/cse.mbstu.11">
            <FontAwesomeIcon
              aria-label="facebook page link of CSE,MBSTU"
              icon={faFacebookF}
            />
          </a>
        </div>

        <div>
          <a tabIndex="4" href="https://cse.mbstu.ac.bd/faq">
            <FontAwesomeIcon
              aria-label="frequently asked question"
              icon={faCircleQuestion}
            />
            <span>FAQ</span>
          </a>
          <a tabIndex="5" href="https://cse.mbstu.ac.bd/login">
            <FontAwesomeIcon aria-label="login" icon={faLock} />
            <span>Login</span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Topbar;

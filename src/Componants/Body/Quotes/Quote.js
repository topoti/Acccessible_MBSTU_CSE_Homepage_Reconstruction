import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Container } from "react-bootstrap";

const Quote = ({ blockquote }) => {
  const { id, quote, author } = blockquote;
  return (
    <Slide index={id - 1}>
      <div className="quotebg d-flex align-items-center justify-content-center">
        <Container fluid="true" className="quotation px-2 py-md-4">
          <div className="d-flex pt-2 0">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="quote-left-icon me-2"
              aria-label="left quote icon"
            />
            <blockquote className="text-white d-inline-block fst-italic">
              {quote}
            </blockquote>
          </div>
          <p
            className="fw-bold ms-4"
            style={{ color: "rgba(232, 255, 0, 0.9)" }}
          >
            - {author}
          </p>
        </Container>
      </div>
    </Slide>
  );
};

export default Quote;

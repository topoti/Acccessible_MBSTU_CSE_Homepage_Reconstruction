import { Image, Slide } from "pure-react-carousel";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Cards = ({ projects, buttonTitle }) => {
  const { title, img, date, id } = projects;
  return (
    <CardWrapper className="image-container">
      <Slide index={id - 1}>
        <Card className="p-2" style={{ width: "266px", height: "420px" }}>
          <Image
            variant="top"
            src={img}
            style={{ width: "250px", height: "200px" }}
            alt={title}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Text className="card-title">{title}</Card.Text>
            <div>
              <div>
                <FontAwesomeIcon
                  aria-label="calender icon"
                  icon={faCalendarDays}
                  className="card-calender"
                />
                <span className="ms-2">{date}</span>
              </div>
              <Button className="button-card my-2" style={{ padding: "12px" }}>
                <span className="ps-2">{buttonTitle.toUpperCase()}</span>
                <FontAwesomeIcon
                  aria-label="right arrow icon"
                  className="px-2"
                  icon={faArrowRight}
                />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Slide>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border-radius: 8px;
  background: #f5f5f6;

  .image-container {
    height: 168px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;

    @media (min-width: 832px) {
      height: 192px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 24px 16px 31px;

    .heading {
      .heading__title {
        font-weight: 400;
        font-size: 28px;
        padding-bottom: 10px;
        line-height: 34px;
      }

      .heading__subtitle {
        font-weight: 600;
        font-size: 25px;
        color: #4b4c53;
        padding-bottom: 19px;
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        line-height: 26px;
        color: #4b4c53;
        font-size: 15px;
        padding-bottom: 31px;
        word-spacing: 1px;
      }

      .details__btn {
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        word-spacing: -4px;
        color: #6267a1;
      }
    }

    .next-line {
      display: inline-block;
    }
  }
`;

export default Cards;

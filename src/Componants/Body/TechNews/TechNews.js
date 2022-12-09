import { faPencil } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPlay,
  CarouselContext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";
import React, { useContext, useEffect, useState } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import Cards from "../../Shared/Cards/Cards";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import styled from "styled-components";
import ViewAll from "../../Shared/ViewAll/ViewAll";
import useWindowSize from "../../../hooks/windowSize";
import { techNewsData } from "../../../utils/techNewsData";

const TechNews = () => {
  const [slide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(4);

  // const screenWidth = useWindowSize();

  // const carouselContext = useContext(CarouselContext);

  // useEffect(() => {
  //   const updateCarouselSlide = (slideToBeVisible) => {
  //     const { currentSlide, totalSlides, visibleSlides } =
  //       CarouselContext?.state;

  //     console.log(CarouselContext);

  //     setSlideCount(slideToBeVisible);

  //     //this is a fix to reset currentSlide when screen resizes
  //     if (
  //       currentSlide >= totalSlides - visibleSlides ||
  //       currentSlide >= totalSlides - slideToBeVisible
  //     ) {
  //       setCurrentSlide(totalSlides - slideToBeVisible);
  //     }
  //   };

  //   if (screenWidth < 832) {
  //     updateCarouselSlide(1);
  //   } else if (screenWidth < 1088) {
  //     updateCarouselSlide(2);
  //   }
  //   //>= 1088
  //   else {
  //     updateCarouselSlide(4);
  //   }
  // }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Container className="mt-5">
      <SectionTitle
        icon={faPencil}
        title="News"
        titleLight="Tech"
        label="pencil icon"
      />
      <CarouselWrapper className="carousel-container">
        <CarouselProvider
          visibleSlides={slideCount}
          totalSlides={8}
          step={1}
          naturalSlideHeight={600}
          naturalSlideWidth={420}
          currentSlide={slide}
          infinite={true}
          lockOnWindowScroll
          isPlaying
          className="w-full"
        >
          <Slider className="mb-3">
            {techNewsData.map((news) => (
              <Cards
                buttonTitle="read news"
                projects={news}
                key={news.id}
              />
            ))}
          </Slider>
          <div className="slider-options mt-1 d-flex align-items-center justify-content-center">
            <ButtonGroup size="sm" aria-label="carousel button group">
              <ButtonPlay
                className="btn btn-danger border-0"
                childrenPlaying="Pause"
                childrenPaused="Play"
              />
              <ButtonFirst className="border-0 btn btn-danger">
                First
              </ButtonFirst>
              <ButtonBack className="border-0 btn btn-danger">Back</ButtonBack>
              <ButtonNext className="border-0 btn btn-danger">Next</ButtonNext>
              <ButtonLast className="border-0 btn btn-danger">Last</ButtonLast>
            </ButtonGroup>
          </div>
        </CarouselProvider>
      </CarouselWrapper>

      <ViewAll title="View All Projects" />
    </Container>
  );
};

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    filter: drop-shadow(0px 3px 5px rgba(50, 50, 50, 0.2));

    @media screen and (min-width: 832px) {
      max-width: 704px;
    }

    @media screen and (min-width: 1088px) {
      max-width: 960px;
    }

    @media screen and (min-width: 1272px) {
      max-width: 1152px;
    }

    @media screen and (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media screen and (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media screen and (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;

export default TechNews;

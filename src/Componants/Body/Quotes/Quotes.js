import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPlay,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useState } from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import { quotesData } from "../../../utils/quotesData";
import Quote from "./Quote";

const Quotes = () => {
  const [slide, setSlide] = useState(0);

  return (
    <Container fluid className="p-0">
      {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={5}
        visibleSlides={1}
        currentSlide={slide}
        lockOnWindowScroll
        isPlaying
        className="w-full"
      >
        <Slider>
          <Slide index={0}>
            <div className="quotebg">I am the first Slide.</div>
          </Slide>
          <Slide index={1}>
            <div className="quotebg">I am the second Slide.</div>
          </Slide>
          <Slide index={2}>
            <div className="quotebg">I am the third Slide.</div>
          </Slide>
          <Slide index={3}>
            <div className="quotebg">I am the fourth Slide.</div>
          </Slide>
          <Slide index={4}>
            <div className="quotebg">I am the fifth Slide.</div>
          </Slide>
        </Slider>
        <div className="slider-options mt-1 d-flex align-items-center justify-content-center">
          <ButtonGroup size="sm" aria-label="carousel button group">
            <ButtonPlay
              className="btn btn-danger border-0"
              childrenPlaying="Pause"
              childrenPaused="Play"
            />
            <ButtonFirst className="border-0 btn btn-danger">First</ButtonFirst>
            <ButtonBack className="border-0 btn btn-danger">Back</ButtonBack>
            <ButtonNext className="border-0 btn btn-danger">Next</ButtonNext>
            <ButtonLast className="border-0 btn btn-danger">Last</ButtonLast>
          </ButtonGroup>
        </div>
      </CarouselProvider> */}
      <CarouselProvider
        visibleSlides={1}
        totalSlides={5}
        step={1}
        naturalSlideHeight={90}
        naturalSlideWidth={420}
        currentSlide={slide}
        lockOnWindowScroll
        isPlaying
        className="w-full"
      >
        <Slider className="quote-containerbg py-2">
          {quotesData.map((quote) => (
            <Quote key={quote.id} blockquote={quote} />
          ))}
        </Slider>
        {/* <DotGroup className="position-absolute dotgroup-pos start-50 translate-middle" /> */}
        <div className="slider-options mt-1 d-flex align-items-center justify-content-center">
          <ButtonGroup size="sm" aria-label="carousel button group">
            <ButtonPlay
              className="btn btn-danger border-0"
              childrenPlaying="Pause"
              childrenPaused="Play"
            />
            <ButtonFirst className="border-0 btn btn-danger">First</ButtonFirst>
            <ButtonBack className="border-0 btn btn-danger">Back</ButtonBack>
            <ButtonNext className="border-0 btn btn-danger">Next</ButtonNext>
            <ButtonLast className="border-0 btn btn-danger">Last</ButtonLast>
          </ButtonGroup>
        </div>
      </CarouselProvider>
    </Container>
  );
};

export default Quotes;

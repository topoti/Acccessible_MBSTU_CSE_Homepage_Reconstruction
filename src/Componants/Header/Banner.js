import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPlay,
  CarouselProvider,
  DotGroup,
  Image,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useState } from "react";
import { ButtonGroup} from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

const Banner = () => {
  const [slide, setSlide] = useState(0);

  return (
      <CarouselProvider
        visibleSlides={1}
        totalSlides={5}
        step={1}
        naturalSlideHeight={130}
        naturalSlideWidth={420}
        hasMasterSpinner
        currentSlide={slide}
        lockOnWindowScroll
        isPlaying
        className="w-full"
      >
        <Slider>
          <Slide  index={0}>
            <Image src={img1} />
          </Slide>
          <Slide index={1}>
            <Image src={img2} />
          </Slide>
          <Slide index={2}>
            <Image src={img3} />
          </Slide>
          <Slide index={3}>
            <Image src={img4} />
          </Slide>
          <Slide index={4}>
            <Image src={img5} />
          </Slide>
        </Slider>
        <DotGroup className="position-absolute dotgroup-pos start-50 translate-middle" />
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
  );
};

export default Banner;

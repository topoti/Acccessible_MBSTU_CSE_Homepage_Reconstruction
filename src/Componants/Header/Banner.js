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
import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

const Banner = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="slide position-relative">
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
          <Slide index={0}>
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
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <span>
            <label className="me-2">Select Manually: </label>
            <select
              className="me-4"
              onChange={(ev) => setSlide(Number(ev.target.value))}
            >
              <option
                aria-label="slider image no. 1"
                value="0"
                defaultValue={slide === 0}
              >
                1
              </option>
              <option
                aria-label="slider image no. 2"
                value="1"
                defaultValue={slide === 1}
              >
                2
              </option>
              <option
                aria-label="slider image no. 3"
                value="2"
                defaultValue={slide === 2}
              >
                3
              </option>
              <option
                aria-label="slider image no. 4"
                value="3"
                defaultValue={slide === 3}
              >
                4
              </option>
              <option
                aria-label="slider image no. 5"
                value="4"
                defaultValue={slide === 4}
              >
                5
              </option>
            </select>
          </span>

          <ButtonGroup size="sm" aria-label="carousel button group">
            <ButtonPlay
              className="btn btn-dark border-0"
              childrenPlaying="Pause"
              childrenPaused="Play"
            />
            <ButtonFirst className="border-0 btn btn-dark">First</ButtonFirst>
            <ButtonBack className="border-0 btn btn-dark">Back</ButtonBack>
            <ButtonNext className="border-0 btn btn-dark">Next</ButtonNext>
            <ButtonLast className="border-0 btn btn-dark">Last</ButtonLast>
          </ButtonGroup>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Banner;

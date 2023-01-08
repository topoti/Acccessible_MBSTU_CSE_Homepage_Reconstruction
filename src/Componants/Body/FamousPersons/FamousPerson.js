import { Slide } from "pure-react-carousel";
import React from "react";

const FamousPerson = ({ famousPersons }) => {
  const { name, work, img, title, alt } = famousPersons;
  return (
    <Slide>
      <div className="d-flex flex-column text-white align-items-center">
        <img
          className="border border-3 border-white"
          src={img}
          alt={alt}
          width="83px"
          height="83px"
        />
        <p className="famous-title text-center">{name}</p>
        <p className="famous-subtitle">{title}</p>
        {work && <p className="famous-subtitle">{work}</p>}
      </div>
    </Slide>
  );
};

export default FamousPerson;

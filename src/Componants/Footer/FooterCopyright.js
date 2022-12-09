import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterCopyright = () => {
  return (
    <div className="footer-copyright text-center text-white py-4 d-flex justify-content-center">
      <small className="ms-2">&#169; Copyright 2017 - 2022</small>
      <small className="mx-2">|</small>
      <small>All Rights Reserved</small>
      <small className="mx-2">|</small>
      <small>Design & Development by</small>
      <small className="mx-2">|</small>
      <small className="footer-cse me-2">
        CSE
        <FontAwesomeIcon icon={faCircle } aira-label="circle dot" className="mx-1 dot-size" />
        MBSTU
      </small>
    </div>
  );
};

export default FooterCopyright;

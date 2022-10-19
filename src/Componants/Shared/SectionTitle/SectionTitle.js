import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTitle = ({ icon, title, titleLight, label }) => {
  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-center" style={{ fontSize: "34px" }}>
        <span style={{ fontWeight: "300" }}>{titleLight} </span>
        {title}
      </h2>
      <div className="paper-plane d-flex align-items-center justify-content-center rounded-circle">
        <FontAwesomeIcon
          icon={icon}
          className="paper-plane-icon"
          aria-label={label}
        />
      </div>

      <span className="paper-plane-line-through position-absolute " />
    </div>
  );
};

export default SectionTitle;

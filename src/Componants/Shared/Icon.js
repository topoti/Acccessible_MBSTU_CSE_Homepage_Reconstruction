import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({ icon, customClass, label }) => {
  return (
    <div className="paper-plane d-flex align-items-center justify-content-center rounded-circle">
      <FontAwesomeIcon icon={icon} className={customClass} aria-label={label} />
    </div>
  );
};

export default Icon;

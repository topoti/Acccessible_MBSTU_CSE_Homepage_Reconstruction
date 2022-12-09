import React from "react";
import FooterCopyright from "./FooterCopyright";
import FooterInfo from "./FooterInfo";
import FooterUniversityName from "./FooterUniversityName";

const Footer = () => {
  return (
    <footer>
      <FooterInfo />
      <FooterUniversityName />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;

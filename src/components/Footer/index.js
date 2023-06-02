import React from "react";
import "./Footer.scss";
const Footer = ({ src, height = "", content }) => {
  return (
    <>
      <div className="borderBottom"></div>
      <div className="footerContent">
        <img src={src} alt="arrow" height={height} />
        <span>{content}</span>
      </div>
    </>
  );
};
export default Footer;

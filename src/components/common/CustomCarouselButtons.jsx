import React from "react";
import "../../styles/components/common/customcarouselbutton.css";

export const PrevButton = ({ className, style, onClick }) => (
  <div
    className={`${className} button__carousel`}
    style={{ ...style }}
    onClick={onClick}
  >
    <i className="fas fa-arrow-left"></i>
  </div>
);

export const NextButton = ({ className, style, onClick }) => (
  <div
    className={`${className} button__carousel`}
    style={{ ...style }}
    onClick={onClick}
  >
    <i className="fas fa-arrow-right"></i>
  </div>
);

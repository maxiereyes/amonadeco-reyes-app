import React from "react";
import "../../styles/components/utils/Title.scss";

export const Title = ({ text }) => {
  return (
    <div className="containerTitle">
      <h2 className="title">{text}</h2>
    </div>
  );
};

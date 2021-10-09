import React from "react";
import "../../styles/components/utils/title.css";

export const Title = ({ text }) => {
  return (
    <div className="container__title">
      <h1 className="title">{text}</h1>
      <hr />
    </div>
  );
};

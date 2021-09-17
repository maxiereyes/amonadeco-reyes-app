import React from "react";
import { Link } from "react-router-dom";

export const LinkComponent = (props) => {
  return (
    <Link {...props} to={props.path || "/"}>
      <span className="text-uppercase">{props.text}</span>
    </Link>
  );
};

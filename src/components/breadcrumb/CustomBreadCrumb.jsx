import React from "react";
import { Link } from "react-router-dom";

export const CustomBreadCrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" className="">
      <ol className="breadcrumb">
        {path.map((pathName, index) =>
          pathName === "" ? (
            <li className="breadcrumb-item" key={index}>
              <Link to="/">
                <i
                  className="fas fa-home text-secondary"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </Link>
            </li>
          ) : (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={index}
            >
              {pathName}
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

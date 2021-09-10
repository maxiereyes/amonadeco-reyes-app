import React from "react";

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

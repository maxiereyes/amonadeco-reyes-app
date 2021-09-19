import React from "react";
import { Title } from "../utils/Title";
import { CartGrid } from "./CartGrid";

export const CartListContainer = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-12 col-md-8">
          <Title text="MI CARRITO" />
          <CartGrid />
        </div>
      </div>
    </div>
  );
};

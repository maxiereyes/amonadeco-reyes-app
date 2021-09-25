import React from "react";
import { useCartContext } from "../../context/cartContext";
import "../../styles/components/cart/cart.css";

export const Cart = ({ product }) => {
  const { deleteItem } = useCartContext();

  return (
    <div className="custom__container__cart">
      <div>
        <div className="custom__container__image">
          <img src={product.image} className="custom__image" alt="" />
        </div>

        <h3 className="custom__title">{product.title}</h3>
        <h6 className="custom__id">{product.id}</h6>
        <div className="custom__container__specification">
          <p>
            <span className="custom__measures">MEDIDAS: </span>
            {product.measures}
          </p>
        </div>
      </div>
      <div>
        <h5 className="custom__price">${product.price}</h5>
      </div>
      <div className="custom__count__container">
        <h5 className="custom__count">{product.count}</h5>
      </div>
      <div className="custom__total__container position-relative">
        <h5 className="custom__total">${product.count * product.price}</h5>
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0"
          aria-label="Close"
          onClick={() => deleteItem(product.id)}
        ></button>
      </div>
    </div>
  );
};

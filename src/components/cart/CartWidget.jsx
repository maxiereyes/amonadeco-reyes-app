import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <>
      {cartList.length ? (
        <Link
          to={"/cart"}
          className="btn btn-outline-secondary position-relative"
        >
          <i className="fas fa-shopping-cart custom-cart"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
            {cartList.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </Link>
      ) : null}
    </>
  );
};

export default CartWidget;

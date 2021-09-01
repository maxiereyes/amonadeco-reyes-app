import React from "react";

const CartWidget = () => {
  return (
    <button className="btn btn-outline-secondary position-relative">
      <i className="fas fa-shopping-cart custom-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
        0<span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default CartWidget;

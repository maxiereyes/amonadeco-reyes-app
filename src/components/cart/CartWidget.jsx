import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "../../styles/components/cart/CartWidget.scss";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <>
      {cartList.items && cartList.items.length ? (
        <Link to={"/cart"} className="linkCart">
          <div className="linkContainerCart">
            <i className="fas fa-shopping-cart iconCart"></i>
            <span className="badgeCart">
              {cartList.items.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default CartWidget;

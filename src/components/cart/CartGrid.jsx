import React from "react";
import { Cart } from "./Cart";
import "../../styles/components/cart/cartgrid.css";
import { useCartContext } from "../../context/cartContext";

export const CartGrid = () => {
  const { cartList } = useCartContext();

  return (
    <>
      {cartList.length ? (
        <div className="custom__cart__grid">
          <p className="text-muted ">PRODUCTO</p>
          <p className="text-muted ">PRECIO</p>
          <p className="text-muted ">CANT.</p>
          <p className="text-muted d-none d-sm-block">TOTAL</p>

          {cartList.map((product) => (
            <Cart product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h3 className="my-3 text-center text-uppercase text-muted">
          Sin productos agregados al carrito
        </h3>
      )}
    </>
  );
};

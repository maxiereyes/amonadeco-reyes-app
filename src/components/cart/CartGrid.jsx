import React from "react";
import { Cart } from "./Cart";
import "../../styles/components/cart/cartgrid.css";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export const CartGrid = () => {
  const { cartList } = useCartContext();

  const subtotal = cartList.reduce((acc, product) => acc + product.total, 0);

  return (
    <>
      {cartList.length ? (
        <div className="d-flex">
          <div className="custom__cart__grid">
            <p className="text-muted ">PRODUCTO</p>
            <p className="text-muted ">PRECIO</p>
            <p className="text-muted ">CANT.</p>
            <p className="text-muted d-none d-sm-block">TOTAL</p>

            {cartList.map((product) => (
              <Cart product={product} key={product.id} />
            ))}
          </div>
          <div className="custom__container__order">
            <div className="d-flex justify-content-between align-tiems-center custom__container__subtotal__order">
              <div>
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div>
                <p>Descuento</p>
                <p>$0</p>
              </div>
              <div>
                <p>Envio</p>
                <p>$0</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-tiems-center custom__container__total__order">
              <p>Total</p>
              <p>${subtotal}</p>
            </div>
            <button className="btn w-100 btn-dark my-4">Comprar</button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center flex-column">
          <h3 className="my-3 text-center text-uppercase text-muted">
            Sin productos agregados al carrito
          </h3>
          <div className="text-center">
            <Link to="/" className="btn btn-dark px-5">
              <i className="fas fa-home"></i>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

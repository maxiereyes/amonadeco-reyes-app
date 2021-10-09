import React, { useState } from "react";
import { Cart } from "./Cart";
import "../../styles/components/cart/cartgrid.css";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { addOrder } from "../../api/ordersService";
import { updateProductStock } from "../../api/productsService";
import { CartForm } from "./CartForm";
import { Modal } from "react-bootstrap";

export const CartGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartList, clearCart } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleClickBuy = async (formState) => {
    setShowModal(false);
    setLoading(true);

    const order = {
      buyer: formState,
      items: cartList.items.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.count,
      })),
      total: cartList.total,
    };

    try {
      const id = await addOrder(order);
      await cartList.items.forEach(async (item) => {
        await updateProductStock(item.id, item.measures.value, item.count);
      });
      setLoading(false);
      alert(`Orden Confirmada - ID: #${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      clearCart();
    }
  };

  return (
    <>
      {cartList.items && cartList.items.length ? (
        <>
          <div className="d-flex">
            <div className="custom__cart__grid">
              <p className="text-muted ">PRODUCTO</p>
              <p className="text-muted ">PRECIO</p>
              <p className="text-muted ">CANT.</p>
              <p className="text-muted d-none d-sm-block">TOTAL</p>

              {cartList.items.map((product, index) => (
                <Cart product={product} key={`${product.id}-${index}`} />
              ))}
            </div>
            <div className="custom__container__order">
              <div className="d-flex justify-content-between align-tiems-center custom__container__subtotal__order">
                <div>
                  <p>Subtotal</p>
                  <p>${cartList.total}</p>
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
                <p>${cartList.total}</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="btn w-100 btn-dark my-4"
              >
                {loading ? (
                  <span
                    className="mx-2 spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Generar Orden"
                )}
              </button>
              <button
                onClick={clearCart}
                className="btn w-100 text-center text-secondary"
              >
                Limpiar Carrito
              </button>
            </div>
          </div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Body>
              <CartForm handleBuyOrder={handleClickBuy} />
            </Modal.Body>
          </Modal>
        </>
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

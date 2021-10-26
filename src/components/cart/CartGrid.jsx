import React, { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Cart } from "./Cart";
import { useCartContext } from "../../context/cartContext";
import { addOrder } from "../../api/ordersService";
import { updateProductStock } from "../../api/productsService";
import { CartForm } from "./CartForm";
import { Title } from "../utils/Title";
import "../../styles/components/cart/CartGrid.scss";
import { useHistory } from "react-router-dom";
import { CustomModal } from "../utils/CustomModal";

export const CartGrid = () => {
  const { cartList, clearCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState({
    show: false,
    status: "",
    message: "",
  });
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const handleClickBuy = async (formState) => {
    setLoading(true);

    const order = {
      buyer: formState,
      items: cartList.items.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.count,
        size: item.variants.size,
        color: item.variants.color,
      })),
      total: cartList.total,
    };

    try {
      const id = await addOrder(order);
      await cartList.items.forEach(async (item) => {
        await updateProductStock(
          item.id,
          item.variants.size,
          item.variants.color,
          item.count
        );
      });
      setLoading(false);
      setDataModal({
        show: true,
        status: "ok",
        message: `Orden Confirmada - ID: #${id}`,
      });
      clearCart();
    } catch (error) {
      console.log(error);
      setDataModal({
        show: true,
        status: "error",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {cartList.items && cartList.items.length ? (
        <Row className="containerCart">
          <Col lg={8} className="containerCartDetail">
            <Title text="MI CARRITO" />
            <ListGroup variant="flush">
              {cartList.items.map((product, index) => (
                <ListGroup.Item key={`${product.id}-${index}`}>
                  <Cart product={product} />
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="containerCartDetailSummary">
              <div className="containerTotalsSummary">
                <div className="summaryWrapper">
                  <p className="subtotal">Subtotal:</p>
                  <span>${cartList.total}</span>
                </div>
                <div className="summaryWrapper">
                  <p className="total">Total:</p>
                  <span className="spanTotal">${cartList.total}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="containerFormOrder">
            <Title text="Datos Compra" />
            <CartForm handleBuyOrder={handleClickBuy} loading={loading} />
            <button onClick={clearCart} className="buttonClearCart">
              Limpiar Carrito
            </button>
          </Col>
        </Row>
      ) : (
        <div className="containerNoItemsCart">
          <h2>No se encuentran productos en el carrito.</h2>
          <button onClick={goToHome}>HOME</button>
        </div>
      )}
      <CustomModal
        show={dataModal.show}
        status={dataModal.status}
        message={dataModal.message}
        closeModal={() => setDataModal({ show: false })}
      />
    </>
  );
};

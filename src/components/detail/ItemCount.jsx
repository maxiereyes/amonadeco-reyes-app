import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/itemcount.css";

export const ItemCount = ({ stock, initial, addItem, currentMeasures }) => {
  const [btn, setBtn] = useState(true);
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setBtn(true);
    setCount(1);
  }, [currentMeasures]);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onSubstract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const addToCart = (count) => {
    addItem(count);
    setBtn(false);
  };

  return (
    <div className="card bg-light col-2 custom-card border-0">
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-secondary" onClick={onAdd}>
            <i className="fas fa-plus"></i>
          </button>
          <div className="rounded border px-4 py-1 mx-2 lead">{count}</div>
          <button className="btn btn-outline-secondary" onClick={onSubstract}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div className="text-muted text-center mb-2">
        {stock > 0 ? `Stock: ${stock}` : `Sin Stock`}
      </div>
      <div className="text-center m-2 d-grid bg-white">
        {btn ? (
          <button
            className="btn btn-secondary"
            onClick={() => addToCart(count)}
          >
            <i className="fas fa-cart-plus mx-2"></i>
            Agregar al carrito
          </button>
        ) : (
          <>
            <Link to="/cart" className="btn btn-dark text-light">
              Finalizar Compra
            </Link>
            <Link to="/" className="nav-link text-dark my-2">
              Seguir Comprando
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

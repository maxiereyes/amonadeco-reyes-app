import React, { useState } from "react";
import "../../styles/components/itemcount.css";

export const ItemCount = ({ stock, initial, action }) => {
  const [count, setCount] = useState(initial);
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
      <div className="text-center m-2 d-grid bg-white">
        <button className="btn btn-secondary" onClick={() => action(count)}>
          <i className="fas fa-cart-plus mx-2"></i>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
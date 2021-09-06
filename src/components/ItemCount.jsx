import React, { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, initial, title }) => {
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
    <div className="card bg-light col-2 custom-card">
      <div className="card-title">
        <h5 className="text-secondary p-2 lead text-uppercase">{title}</h5>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-secondary" onClick={onAdd}>
            <i class="fas fa-plus"></i>
          </button>
          <div className="rounded border px-4 py-1 mx-2 lead">{count}</div>
          <button className="btn btn-outline-secondary" onClick={onSubstract}>
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div className="text-center m-2 d-grid bg-white">
        <button className="btn btn-secondary">
          <i class="fas fa-cart-plus mx-2"></i>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
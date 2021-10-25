import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/components/item/ItemCount.scss";

export const ItemCount = ({
  stock,
  initial,
  addItem,
  currentVariantsSize,
  currentVariantsColor,
}) => {
  const [btn, setBtn] = useState(true);
  const [count, setCount] = useState(initial);
  const history = useHistory();

  useEffect(() => {
    setBtn(true);
    setCount(1);
  }, [currentVariantsSize, currentVariantsColor]);

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

  const goToBuy = () => {
    history.push("/cart");
  };

  return (
    <div className="customContainer">
      <div className="containerCount">
        <h3 className="titleCount">Cantidad</h3>
        <div className="containerItemCount">
          <button className="buttonItemCount" onClick={onAdd}>
            <i className="fas fa-plus"></i>
          </button>
          <div className="numberItemCount">{count}</div>
          <button className="buttonItemCount" onClick={onSubstract}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div className="stockItemCount">
          {stock > 0 ? `Stock disponible: ${stock}` : `Sin Stock`}
        </div>
      </div>

      {btn ? (
        <button
          className="buttonCustom buttonAddCart"
          onClick={() => addToCart(count)}
        >
          <i className="fas fa-cart-plus mx-2"></i>
          Agregar al carrito
        </button>
      ) : (
        <>
          <button className="buttonCustom buttonBuy" onClick={goToBuy}>
            Finalizar Compra
          </button>
          <Link to="/" className="linkContinueBuy">
            Seguir Comprando
          </Link>
        </>
      )}
    </div>
  );
};

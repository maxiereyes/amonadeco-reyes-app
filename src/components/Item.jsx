import React from "react";
import "../styles/components/item.css";

const Item = ({ product }) => {
  const { title, description, image, freeTax, promotion, price } = product;

  const addCart = () => {
    alert("Agregado al carrito satisfactoriamente!");
  };

  return (
    <div className="card p-4 custom_card">
      <div className="container_image position-relative">
        <img src={image} alt="" className="custom_image" />
        {promotion && <span className="badge_promotion">OFF {promotion}%</span>}
      </div>
      <div className="card-title pt-3 my-0">
        <h1 className="lead text-center text-uppercase">{title}</h1>
      </div>
      <div className="card-body my-0 p-0 custom_card_body">
        <p className="text-muted text-center custom_font_description">
          {description}
        </p>
      </div>
      <div className="text-center ">
        <h2 className="custom_price">${price}</h2>
      </div>
      <div className="border text-center p-2 my-3">
        {!freeTax ? (
          <p className="text_promotion h-100 my-auto">Sin cuotas</p>
        ) : (
          <p className="text_promotion h-100 my-auto">
            <strong>{freeTax} </strong>
            cuotas sin interes de $
            <strong>{Math.round(price / freeTax)}</strong>
          </p>
        )}
      </div>
      <button
        className="btn btn-outline-secondary text-uppercase custom_font_button"
        onClick={addCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Item;

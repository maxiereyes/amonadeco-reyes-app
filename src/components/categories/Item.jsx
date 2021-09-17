import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/item.css";

const Item = ({ product, category }) => {
  const { title, subtitle, image, promotion, price, id } = product;

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
          {subtitle}
        </p>
      </div>
      <div className="text-center ">
        <h2 className="custom_price">${price}</h2>
      </div>
      <div className="d-flex justify-content-between w-100 py-3">
        <button className="btn btn-dark custom_font_button" onClick={addCart}>
          <i className="fas fa-cart-plus"></i>
        </button>
        <Link
          className="btn btn-dark custom_font_button"
          to={`/category/${category}/detail/${id}`}
        >
          <i className="far fa-eye"></i>
        </Link>
      </div>
    </div>
  );
};

export default Item;

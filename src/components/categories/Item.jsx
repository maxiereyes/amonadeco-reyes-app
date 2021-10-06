import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/item.css";

const Item = ({ product }) => {
  const { title, subtitle, image, promotion, price, id, stock } = product;

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

      {stock > 0 ? (
        <Link
          className="btn w-100 btn-secondary custom_font_button mt-3 d-flex align-items-center justify-content-center"
          to={`/detail/${id}`}
        >
          <i className="far fa-eye mx-2"></i>
          <span className="text-light">Ver detalle</span>
        </Link>
      ) : (
        <p className="mx-auto mt-3 mb-0 lead text-secondary text-center border px-2">
          SIN STOCK
        </p>
      )}
    </div>
  );
};

export default Item;

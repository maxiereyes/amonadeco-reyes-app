import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/item/Item.scss";

const Item = ({ product, fromHome }) => {
  const { title, subtitle, image, variants, id } = product;

  return (
    <>
      <div
        className={
          fromHome
            ? "cardItemContainer cardItemWidthHome"
            : "cardItemContainer cardItemWidthCategory"
        }
      >
        <div className="cardItemContainerImage">
          <img src={image} alt="" className="cardItemImage" />
        </div>
        <h2 className="cardItemTitle">{title}</h2>
        <h3 className="cardItemSubtitle">{subtitle}</h3>
        <p className="cardItemPrice">
          ${variants && variants.length && variants[0].price}
        </p>
        <div className="cardItemOverlay">
          <Link className="cardItemButton" to={`/detail/${id}`}>
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;

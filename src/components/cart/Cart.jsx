import React from "react";
import { useCartContext } from "../../context/cartContext";
import "../../styles/components/cart/Cart.scss";

export const Cart = ({ product }) => {
  const { deleteItem, addToCart, substractToCart } = useCartContext();

  const substractCount = () => {
    if (product.count > 1) {
      substractToCart({ ...product, count: 1, total: product.price });
    }
  };

  const addCount = () => {
    if (product.count < product.variants.stock) {
      addToCart({ ...product, count: 1, total: product.price });
    }
  };

  return (
    <div className="containerCartProduct">
      <div className="detailImage">
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <div className="containerDetailItem">
        <h3 className="productTitle">{product.title}</h3>
        <div className="productVariants">
          <p className="variantContainer">
            MEDIDAS:
            <span className="variant">{product.variants.size}</span>
          </p>
          <p className="variantContainer">
            COLOR:
            <span className="variant">{product.variants.color}</span>
          </p>
        </div>
      </div>
      <div className="productCountContainer">
        <button className="productButtonCount" onClick={addCount}>
          <i className="fas fa-plus"></i>
        </button>
        <div className="productCountValue">{product.count}</div>
        <button className="productButtonCount" onClick={substractCount}>
          <i className="fas fa-minus"></i>
        </button>
      </div>

      <h5 className="productTotal">${product.count * product.price}</h5>

      <button
        type="button"
        className={["btn-close buttonClose"]}
        aria-label="Close"
        onClick={() =>
          deleteItem(product.id, product.variants.size, product.variants.color)
        }
      ></button>
    </div>
  );
};

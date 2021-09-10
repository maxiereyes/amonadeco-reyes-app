import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {products.length &&
        products.map((product) => <Item key={product.id} product={product} />)}
    </div>
  );
};

export default ItemList;

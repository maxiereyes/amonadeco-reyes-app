import React from "react";
import { CustomCarousel } from "../common/CustomCarousel";
import Item from "./Item";
import { Title } from "../utils/Title";

const ItemList = ({ products, idCategory, title }) => {
  return (
    <>
      <Title text={idCategory ? idCategory : title} />
      <div className="d-flex flex-wrap justify-content-around">
        {idCategory ? (
          products.map((product) => (
            <Item key={product.id} product={product} category={idCategory} />
          ))
        ) : (
          <CustomCarousel items={products} />
        )}
      </div>
    </>
  );
};

export default ItemList;

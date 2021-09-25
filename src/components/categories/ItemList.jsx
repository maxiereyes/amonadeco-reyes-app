import React from "react";
import { CustomCarousel } from "../common/CustomCarousel";
import Item from "./Item";
import { Title } from "../utils/Title";

const ItemList = ({ products, idCategory, title }) => {
  return (
    <>
      <Title text={idCategory ? idCategory : title} />
      {products.length ? (
        <div className="d-flex flex-wrap justify-content-around">
          {idCategory ? (
            products.map((product) => (
              <Item key={product.id} product={product} category={idCategory} />
            ))
          ) : (
            <CustomCarousel items={products} />
          )}
        </div>
      ) : (
        <h2 className="text-center my-3 text-muted text-uppercase">
          No hay productos para esta categoria.
        </h2>
      )}
    </>
  );
};

export default ItemList;

import React from "react";
import { CustomCarousel } from "../common/CustomCarousel";
import Item from "./Item";
import { Title } from "../utils/Title";

const ItemList = ({ products, title }) => {
  return (
    <>
      <Title text={title} />
      {products.length ? (
        <div className="d-flex flex-wrap justify-content-around">
          {title !== "Productos Destacados" ? (
            products.map((product) => (
              <Item key={product.id} product={product} />
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

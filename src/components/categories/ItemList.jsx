import React from "react";
import { CustomCarousel } from "../common/CustomCarousel";
import Item from "./Item";
import { Title } from "../utils/Title";
import "../../styles/components/item/ItemList.scss";

const ItemList = ({ products, title }) => {
  return (
    <>
      <Title text={title} />
      {products.length ? (
        <div className="containerListItem">
          {title !== "Productos Destacados" ? (
            products.map((product) => (
              <Item key={product.id} product={product} fromHome={false} />
            ))
          ) : (
            <CustomCarousel items={products} />
          )}
        </div>
      ) : (
        <h2 className="titleNoProducts">
          No hay productos para esta categoria.
        </h2>
      )}
    </>
  );
};

export default ItemList;

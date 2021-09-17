import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategoryId,
} from "../../api/productsService";
import ItemList from "./ItemList";
import { Loading } from "../utils/Loading";
import { getCategoryTitleByValue } from "../../helpers/getCategoryTitle";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let data = [];
    setLoading(true);
    setTimeout(async () => {
      try {
        if (id && id !== "todos") {
          data = await getProductsByCategoryId(id);
        } else {
          data = await getProducts();
        }
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }, [id]);

  return (
    <div className="container my-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemList
            products={products}
            idCategory={id ? getCategoryTitleByValue(id) : ""}
            title="Productos Destacados"
          />
        </>
      )}
    </div>
  );
};

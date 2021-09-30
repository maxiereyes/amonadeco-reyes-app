import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategoryId,
} from "../../api/productsService";
import ItemList from "./ItemList";
import { Loading } from "../utils/Loading";
import { getCategoryNameById } from "../../api/categoryService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameCategory, setNameCategory] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getAllProducts = async () => {
      let data = [];
      try {
        if (id) {
          data = await getProductsByCategoryId(id);
          const dataCategory = await getCategoryNameById(id);
          setNameCategory(dataCategory.name);
        } else {
          data = await getProducts();
        }
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, [id]);

  return (
    <div className="container my-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemList
            products={products}
            title={nameCategory ? nameCategory : "Productos Destacados"}
          />
        </>
      )}
    </div>
  );
};

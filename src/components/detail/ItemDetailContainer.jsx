import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productsService";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "../utils/Loading";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const productFound = await getProductById(idItem);
        setProduct(productFound);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }, [idItem]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <h1>Not found item</h1>
      )}
    </div>
  );
};

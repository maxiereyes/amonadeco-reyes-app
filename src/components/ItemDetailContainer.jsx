import React, { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../api/productsService";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "./Loading";

export const ItemDetailContainer = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const productFound = await getProductById(id);
      setProduct(productFound);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(getProduct(), 2000);
  }, []);

  return (
    <div className="container">
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};

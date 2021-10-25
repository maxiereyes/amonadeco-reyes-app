import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productsService";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "../utils/Loading";
import "../../styles/components/detail/ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productFound = await getProductById(idItem);
        setProduct(productFound);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [idItem]);

  return (
    <div className="containerItemDetail">
      {loading ? (
        <Loading />
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <h2 className="">Not found item</h2>
      )}
    </div>
  );
};

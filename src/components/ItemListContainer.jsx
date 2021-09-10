import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsService";
import ItemList from "./ItemList";
import { Loading } from "./Loading";

const ItemListContainer = ({ greeting, children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }, []);

  return (
    <div className="container my-4">
      <h1 className="lead text-uppercase border-bottom py-2">{greeting}</h1>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

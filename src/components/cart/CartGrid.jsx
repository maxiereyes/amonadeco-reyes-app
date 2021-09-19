import React from "react";
import { Cart } from "./Cart";
import "../../styles/components/cart/cartgrid.css";

export const CartGrid = () => {
  const products = [
    {
      title: "Titulo 1",
      image:
        "https://res.cloudinary.com/www-amonadeco-com-ar/image/upload/v1631823757/AmonaDeco/WhatsApp_Image_2021-09-16_at_11.24.46_1_qjzwem.jpg",
      count: 2,
      price: 2400,
      id: "#032502305FF",
      measures: "26cm",
      color: "blanco",
    },
    {
      title: "Titulo 2",
      image:
        "https://res.cloudinary.com/www-amonadeco-com-ar/image/upload/v1631823757/AmonaDeco/WhatsApp_Image_2021-09-16_at_11.24.46_1_qjzwem.jpg",
      count: 1,
      price: 2400,
      id: "#032502305FF",
      measures: "26cm",
      color: "blanco",
    },
    {
      title: "Titulo 3",
      image:
        "https://res.cloudinary.com/www-amonadeco-com-ar/image/upload/v1631823757/AmonaDeco/WhatsApp_Image_2021-09-16_at_11.24.46_1_qjzwem.jpg",
      count: 4,
      price: 2400,
      id: "#032502305FF",
      measures: "26cm",
      color: "blanco",
    },
  ];
  return (
    <div className="custom__cart__grid">
      <p className="text-muted ">PRODUCTO</p>
      <p className="text-muted ">PRECIO</p>
      <p className="text-muted ">CANT.</p>
      <p className="text-muted d-none d-sm-block">TOTAL</p>

      {products.map((product) => (
        <Cart product={product} />
      ))}
    </div>
  );
};

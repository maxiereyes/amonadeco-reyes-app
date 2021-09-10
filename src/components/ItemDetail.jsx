import React from "react";
import { GalleryComponent } from "./GalleryComponent";
import ItemCount from "./ItemCount";
import { CurrencyFormat } from "./utils/CurrencyFormat";

export const ItemDetail = ({ product }) => {
  const { title, freeTax, price, gallery } = product;

  const freeDuesPrice = freeTax && price / freeTax;

  const addItem = (count) => {
    alert(`Se agregaron ${count} unidades de ${title} a tu carrito`);
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <GalleryComponent images={gallery} />
      </div>
      <div className="col-12 col-lg-4 justify-content-center justify-content-lg-start d-flex flex-column align-items-lg-start align-items-center my-lg-0 my-4">
        <h1>{title}</h1>
        <h3 className="my-2">
          <CurrencyFormat value={price} prefix="$" />
        </h3>
        <div
          className="text-info border rounded p-2 my-2"
          style={{ width: "max-content" }}
        >
          <i class="far fa-credit-card"></i>
          {freeTax
            ? ` ${freeTax} cuotas sin interes de $${freeDuesPrice.toFixed(2)}`
            : `Hasta 12 cuotas con interes`}
        </div>
        <div className="my-2">
          <ItemCount stock={20} initial={1} action={addItem} />
        </div>
      </div>
    </div>
  );
};

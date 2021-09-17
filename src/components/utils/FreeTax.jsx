import React from "react";
import "../../styles/components/utils/freetax.css";

export const FreeTax = ({ tax, price }) => {
  const freeDuesPrice = tax && price / tax;

  return (
    <div className="text-info border rounded p-2 my-2 d-flex justify-content-evenly align-items-center custom__container__tax">
      <i className="far fa-credit-card"></i>
      <p className="custom__font__tax">
        {tax
          ? ` ${tax} cuotas sin interes de $${freeDuesPrice.toFixed(2)}`
          : `Hasta 12 cuotas con interes`}
      </p>
    </div>
  );
};

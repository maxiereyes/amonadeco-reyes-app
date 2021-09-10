import React from "react";
import NumberFormat from "react-number-format";

export const CurrencyFormat = ({ value, prefix }) => {
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      decimalSeparator={"."}
      prefix={prefix}
    />
  );
};

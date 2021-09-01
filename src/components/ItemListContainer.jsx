import React from "react";

const ItemListContainer = ({ greeting, children }) => {
  return (
    <div className="container my-4">
      <h1 className="lead text-uppercase border-bottom py-2">{greeting}</h1>
      {children}
    </div>
  );
};

export default ItemListContainer;

import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState({
    items: [],
    total: 0,
  });

  const substractToCart = (item) => {
    const productFound = cartList.items.find(
      (product) =>
        product.id === item.id &&
        product.variants.size === item.variants.size &&
        item.variants.color === product.variants.color
    );

    if (productFound) {
      const newCartList = cartList.items.map((product) => {
        if (
          product.id === item.id &&
          product.variants.size === item.variants.size &&
          product.variants.color === item.variants.color
        ) {
          product.count -= item.count;
          product.total -= item.total;
        }
        return {
          ...product,
        };
      });

      setCartList({
        items: newCartList,
        total: newCartList.reduce((acc, product) => acc + product.total, 0),
      });
    } else {
      setCartList({
        items: [...cartList.items, item],
        total: cartList.items.reduce(
          (acc, product) => acc + product.total,
          item.total
        ),
      });
    }
  };

  const addToCart = (item) => {
    const productFound = cartList.items.find(
      (product) =>
        product.id === item.id &&
        product.variants.size === item.variants.size &&
        item.variants.color === product.variants.color
    );

    if (productFound) {
      const newCartList = cartList.items.map((product) => {
        if (
          product.id === item.id &&
          product.variants.size === item.variants.size &&
          product.variants.color === item.variants.color
        ) {
          product.count += item.count;
          product.total += item.total;
        }
        return {
          ...product,
        };
      });

      setCartList({
        items: newCartList,
        total: newCartList.reduce((acc, product) => acc + product.total, 0),
      });
    } else {
      setCartList({
        items: [...cartList.items, item],
        total: cartList.items.reduce(
          (acc, product) => acc + product.total,
          item.total
        ),
      });
    }
  };

  const clearCart = () => {
    setCartList({
      items: [],
      total: 0,
    });
  };

  const deleteItem = (id, variantsSize, variantsColor) => {
    const newCartList = cartList.items;
    const itemToDeleted = newCartList.findIndex(
      (product) =>
        product.variants.size === variantsSize &&
        product.variants.color === variantsColor &&
        product.id === id
    );
    newCartList.splice(itemToDeleted, 1);

    setCartList({
      items: newCartList,
      total: newCartList.reduce((acc, product) => acc + product.total, 0),
    });
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, clearCart, deleteItem, substractToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

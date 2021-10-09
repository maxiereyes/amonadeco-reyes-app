import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState({
    items: [],
    total: 0,
  });

  const addToCart = (item) => {
    const productFound = cartList.items.find(
      (product) =>
        product.id === item.id && product.measures.value === item.measures.value
    );

    if (productFound) {
      const newCartList = cartList.items.map((product) => {
        if (
          product.id === item.id &&
          product.measures.value === item.measures.value
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

  const deleteItem = (id, measureValue) => {
    const newCartList = cartList.items;
    const itemToDeleted = newCartList.findIndex(
      (product) => product.measures.value === measureValue && product.id === id
    );
    newCartList.splice(itemToDeleted, 1);

    setCartList({
      items: newCartList,
      total: newCartList.reduce((acc, product) => acc + product.total, 0),
    });
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, clearCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

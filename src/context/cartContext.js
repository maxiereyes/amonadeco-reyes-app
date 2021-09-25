import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const productFound = cartList.find((product) => product.id === item.id);

    if (productFound) {
      const newCartList = cartList.map((product) => {
        if (product.id === item.id) {
          product.count += item.count;
        }
        return {
          ...product,
        };
      });
      setCartList(newCartList);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    const newCartList = cartList.filter((product) => product.id === id);
    setCartList(newCartList);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, clearCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext(null);
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (user.length !== 0) {
      axios
        .get(`http://127.0.0.1:8000/api/cart/${user.id}`)
        .then((response) => {
          if (response.data.cartItems) {
            setCartItems(response.data.cartItems.map((el) => el.product));
          }
        });
    }
  }, [user]);

  const addToCart = (product, color, quantity) => {
    const exist = cartItems.find(
      (x) => x.id === product.id && x.color === color
    );
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.color === color
            ? { ...exist, cart_quantity: exist.cart_quantity + quantity }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, color: color, cart_quantity: quantity },
      ]);
    }
  };

  const removeItem = (product) => {
    const productId = product.id;
    const userId = user.id;
    const color = product.color;
    axios
      .post(`http://127.0.0.1:8000/api/cart-item/delete`, {
        productId,
        color,
        userId,
      })
      .then(() =>
        setCartItems(
          cartItems.filter((x) => !(x.id === product.id && x.color === color))
        )
      )
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider
      value={{
        totalCart,
        setTotalCart,
        cartItems,
        setCartItems,
        addToCart,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

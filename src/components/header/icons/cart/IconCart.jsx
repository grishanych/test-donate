import React from "react";
import { ReactComponent as CartEmpty } from "./cart-empty.svg";
import { ReactComponent as CartFull } from "./cart-full.svg";

const Cart = () => {
  const cartCountFromLocalStorage = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
  const isCartEmpty = cartCountFromLocalStorage === 0;

  return (
    <div>
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <CartFull />
      )}
    </div>
  );
};

export default Cart;

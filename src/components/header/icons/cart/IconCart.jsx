import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CartEmpty } from './cart-empty.svg';
import { ReactComponent as CartFull } from './cart-full.svg';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmpty = cartItems.length === 0;

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

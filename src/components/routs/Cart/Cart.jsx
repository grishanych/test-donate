import React from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem"; 

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);


  return (
    <div className={styles.cardsSectionWrapper}>
      <h2>Кошик</h2>
      <br></br>
      <ul className={styles.cardsListWrapper}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;

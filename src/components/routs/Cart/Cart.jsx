import React from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className={styles.cardsSectionWrapper}>
      {isCartEmpty ? (
        <h2>Ваш кошик порожній</h2>
      ) : (
        <>
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
        </>
      )
      }
    </div>
  );
}

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Кошик</h1>
      <p className={styles.cardsSectionText}>Ваші замовлення</p>

      {isCartEmpty ? <p>Ваш кошик порожній</p> :
        <ul className={styles.cardsListWrapper}>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
            />
          ))}
        </ul>
      }
    </div>
  );
}

export default Cart;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { initializeCart } from "../../../redux/actions/cartActions";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Cart"));
    if (localData && !cartItems.length) {
      dispatch(initializeCart(localData));
    }
  }, [cartItems.length, dispatch]);

  const isCartEmpty = cartItems.length === 0;

  
  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Кошик</h1>
      <p className={styles.cardsSectionText}>Ваші замовлення</p>

      {isCartEmpty ? <p className={styles.cartEmpty}>Ваш кошик порожній</p> :
        <ul className={styles.cardsListWrapper}>
          {currentProducts.map((item) => (
            <CartItem
              key={item.itemNo}
              item={item}
            />
          ))}
        </ul>
      }
    </div>
  );
}

export default Cart;

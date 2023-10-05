import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../../redux/actions/cartActions";
import CartItem from "./CartItem"; // Додавання нового компонента

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    // Викликаємо дію removeFromCart для видалення товару зі списку кошика
    // console.log(productId)
    // dispatch(removeFromCart(productId));
  };

  return (
    <div className={styles.cardsSectionWrapper}>
      <h2>Кошик</h2>
      <br></br>
      <ul className={styles.cardsListWrapper}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;

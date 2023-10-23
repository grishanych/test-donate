import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initializeCart } from "../../../redux/actions/cartActions";
import CartItem from "./CartItem";
import { FormButton } from "../../button/Button";
import { NEW_CART_URL, MAKE_ORDERS } from "../../../endpoints/endpoints";
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

  // ! api
  async function getCartFromServer() {
    try {
      const response = await axios.get(NEW_CART_URL);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }

  const handlePurchase = async () => {
    try {
      const cartData = await getCartFromServer();
      if (cartData !== null) {
        const { email, telephone, _id: customerId } = cartData.customerId;
        
        const newOrder = {
          customerId,
          canceled: false,
          email,
          mobile: telephone,
          letterSubject: "Thank you for order! You are welcome!",
          letterHtml: "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
        };
        console.log(newOrder);
        
        axios
          .post(MAKE_ORDERS, newOrder)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      // !
      // setShowError(true);
      console.error("Помилка при вході:", error);
    }
  };

  
  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Кошик</h1>
      <p className={styles.cardsSectionText}>Ваші замовлення</p>

      {isCartEmpty ? <p className={styles.cartEmpty}>Ваш кошик порожній</p>
        : (
          <ul className={styles.cardsListWrapper}>
            {currentProducts.map((item) => (
              <CartItem
                key={item.itemNo}
                item={item}
              />
            ))}
          </ul>
        )}

      <FormButton text="Купити" padding="10px" onClick={handlePurchase} />
    </div>
  );
}

export default Cart;

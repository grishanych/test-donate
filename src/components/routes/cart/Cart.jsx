import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initializeCart, resetCart } from "../../../redux/actions/cartActions";
// import { initializeCart } from "../../../redux/actions/cartActions";
import CartItem from "./CartItem";
import { FormButton } from "../../button/Button";
import { NEW_CART_URL, MAKE_ORDERS } from "../../../endpoints/endpoints";
import styles from "./Cart.module.scss";
import { openModal } from "../../../redux/actionsCreators/modalActionsCreators";
// import Modal from "../../modal/Modal";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}`;
  const orderNumber = `52-${formattedDate}`;

  // const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
  // const isModalOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Cart"));
    if (localData && !cartItems.length) {
      dispatch(initializeCart(localData));
    }
  }, [cartItems.length, dispatch]);

  const isCartEmpty = cartItems.length === 0;
  // let modalText = " ";
  // if (!isCartEmpty) {
  //   modalText = "Ви успішно замовили товар! Дякуємо за вашу покупку.
  // Незабаром ми з вами зв'яжемось для підтвердження деталей доставки та оплати. Гарного дня!";
  // }
  // else {
  //   modalText = "Здається, ви забули вибрати товар для покупки.
  // Будь ласка, оберіть товар, який вас цікавить, і натисніть 'Купити'.";
  // }

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
    dispatch(openModal());
    try {
      const cartData = await getCartFromServer();
      console.log(cartData);
      if (cartData !== null) {
        const { email, telephone, _id: customerId } = cartData.customerId;
        const newOrder = {
          customerId,
          canceled: false,
          email,
          mobile: telephone,
          letterSubject: "Дякуємо за покупку та весок на підтримку ЗСУ!",
          letterHtml: `<h1>Ваше замовлення прийнято. Номер замовлення - ${orderNumber}.</h1><p>Ми переможемо!</p>`,
        };

        axios
          .post(MAKE_ORDERS, newOrder)
          .then((response) => {
            console.log(response);

            axios
              .delete("http://localhost:4000/api/cart")
              .then((result) => {
                console.log(result);
              })
              .catch((err) => {
                console.log(err);
              });
            dispatch(resetCart());
            localStorage.removeItem("Cart");
            localStorage.removeItem("CountCartProducts");
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

<<<<<<< HEAD
=======
  console.log(currentProducts);
  
>>>>>>> content-page-updated
  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Кошик</h1>
      <p className={styles.cardsSectionText}>Ваші замовлення</p>

      {isCartEmpty ? <p className={styles.cartEmpty}>Ваш кошик порожній</p>
        : (
<<<<<<< HEAD
          <ul className={styles.cardsListWrapper}>
            {cartItems.map((item) => (
=======
          <table className={styles.cardsListWrapper}>
            <thead>
              <tr className={styles.tableRow}>
                <th>Продукти</th>
                <th>Ціна</th>
                <th>Кількість</th>
                <th>
                  {" "}
                </th>
              </tr>
            </thead>
            {currentProducts.map((item) => (
>>>>>>> content-page-updated
              <CartItem
                // eslint-disable-next-line no-underscore-dangle
                key={item._id ? item._id : item.id}
                item={item}
              />
            ))}
          </table>
        )}

<<<<<<< HEAD
      {/* {isModalOpen && (
        <Modal tittle={modalText} />
      )} */}
      <FormButton text="Купити" padding="10px" onClick={handlePurchase} />
=======
      <FormButton text="Оформити замовлення" padding="10px" onClick={handlePurchase} />
>>>>>>> content-page-updated
    </div>
  );
}

export default Cart;

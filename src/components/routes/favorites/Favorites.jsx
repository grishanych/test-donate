import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeFavorites } from "../../../redux/actions/cartActions";
import FavoritesItem from "./FavoritesItem";
import { FormButton } from "../../button/Button";
import { openModal } from "../../../redux/actionsCreators/modalActionsCreators";
import Modal from "../../modal/Modal";
import styles from "./Favorites.module.scss";


function Favorites() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.favorites.items);
  // const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    if (!cartItems.length) {
      const localData = JSON.parse(localStorage.getItem("Favorites"));
      if (localData) {
        dispatch(initializeFavorites(localData));
      }
    }
  }, [cartItems.length, dispatch]);

  const isFavoriteEmpty = cartItems.length === 0; // Тепер перевірка відбувається тут
  // const isFavoriteEmpty = currentProducts.length === 0;

  let modalText = "";
  if (!cartItems) {
    modalText = "Ви успішно замовили товар! Дякуємо за вашу покупку. Незабаром ми з вами зв'яжемось для підтвердження деталей доставки та оплати. Гарного дня!";
  } else {
    modalText = "Здається, ви забули вибрати товар для покупки. Будь ласка, оберіть товар, який вас цікавить, і натисніть 'Купити'.";
  }

  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Обрані товари</h1>
      <p className={styles.cardsSectionText}>Ваші обрані товари</p>

      {isFavoriteEmpty ? <p className={styles.favoriteEmpty}>Ви ще не додали жодного товару</p>
        : (
          // <ul className={styles.cardsListWrapper}>
          //   {cartItems.map((item) => ( // І тут рендеримо використовуючи cartItems з Redux store
          <table className={styles.cardsListWrapper}>
            <thead>
              <tr className={styles.tableRow}>
                <th>Продукти</th>
                <th>Ціна</th>
              </tr>
            </thead>
            {/* {currentProducts.map((item) => ( */}
            {cartItems.map((item) => (
              <FavoritesItem
                key={item.itemNo}
                item={item}
              />
            ))}
          </table>
        )}
      {isModalOpen && (
        <Modal tittle={modalText} />
      )}
      <FormButton text="Купити" padding="10px" onClick={() => { dispatch(openModal()); }} />
    </div>
  );
}

export default Favorites;


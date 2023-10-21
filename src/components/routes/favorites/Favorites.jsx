import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { initializeFavorites } from "../../../redux/actions/cartActions";
import FavoritesItem from "./FavoritesItem";
import styles from "./Favorites.module.scss";


function Favorites() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.favorites.items);
  const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Favorites"));
    if (localData && !cartItems.length) {
      dispatch(initializeFavorites(localData));
    }
  }, [cartItems.length, dispatch]);

  const isFavoriteEmpty = currentProducts.length === 0;


  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Обрані товари</h1>
      <p className={styles.cardsSectionText}>Ваші обрані товари</p>

      {isFavoriteEmpty ? <p className={styles.favoriteEmpty}>Ви ще не додали жодного товару</p> :
        <ul className={styles.cardsListWrapper}>
          {currentProducts.map((item) => (
            <FavoritesItem
              key={item.itemNo}
              item={item}
            />
          ))}
        </ul>
      }
    </div>
  );
}

export default Favorites;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.scss";
import { removeFavorites } from "../../../redux/actions/cartActions";
import Button from "../../button/Button";

function Favorites() {
  const favoriteItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavorites(productId));
  };

  return (
    <div className={styles.favoritesSectionWrapper}>
      {favoriteItems.length === 0 ? (
        <h2>Ви ще не додали жодного обраного товару</h2>
      ) : (
        <>
          <h2>Обрані товари</h2>
          <br />
          <ul className={styles.favoritesListWrapper}>
            {favoriteItems.map((item) => (
              <li key={item.id} className={styles.favoritesItemWrapper}>
                <div className={styles.favoritesItemImageWrapper}>
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className={styles.favoritesItemImage}
                  />
                </div>
                <p>{item.name}</p>
                {item.price ? (
                  <p className={styles.favoritesItemPrice}>{item.price} грн</p>
                ) : null}
                {item.isLot === "Благодійний лот" ? (
                  <p className={styles.decorLot}>ЛОТ</p>
                ) : item.isLot === "Донат" ? (
                  <p className={styles.decorDonat}>ДОНАТ</p>
                ) : null}
                <Button
                  className={styles.buttonRemove}
                  onClick={() => handleRemoveFromFavorites(item.name)}
                  text="Видалити"
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Favorites;

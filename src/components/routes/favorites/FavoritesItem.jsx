import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { removeFavorites } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import styles from "./Favorites.module.scss";
import DeleteIcon from "../cart/DeleteIcon";


function FavoritesItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((cartItem) => cartItem.itemNo === item.itemNo));

  const handleRemoveFromFavorites = () => {
    if (isItemInFavorites) {
      let countProducts = JSON.parse(localStorage.getItem("CountFavoritesProducts")) || 0;
      countProducts -= 1;
      localStorage.setItem("CountFavoritesProducts", JSON.stringify(countProducts));
      
      const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Favorites", JSON.stringify(newProducts));
      
      dispatch(removeFavorites(item.itemNo));
      dispatch(counterDecrement());
    }
  };
  
   
  return (
    <tbody key={item.id} className={styles.cardItemWrapper}>
      <div className={styles.productInfo}>
        <Link to={`/product/${item.itemNo}`}>
          <div className={styles.cardItemImageWrapper}>
            <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
          </div>
        </Link>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{item.shortName}</p>
          <p className={styles.sku}>
            <span>Код товару:</span>
            {" "}
            {item.itemNo}
          </p>
        </div>
      </div>
      <p className={styles.cardItemPrice}>
        {item.currentPrice}
        {" "}
        грн
      </p>
      <Button style={{ backgroundColor: "none" }} onClick={() => handleRemoveFromFavorites()}>
        <DeleteIcon />
      </Button>
    </tbody>
  );
}

export default FavoritesItem;

import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import QuantityCounter from "../../productView/CounterQuantity";
import styles from "./Favorites.module.scss";

function FavoritesItem({ item }) {
  const dispatch = useDispatch();
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((cartItem) => cartItem.itemNo === item.itemNo));

  const handleRemoveFromFavorites= () => {
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
    <li key={item.id} className={styles.cardItemWrapper}>
      <div className={styles.cardItemImageWrapper}>
        <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
      </div>
      <p>{item.name}</p>
      <div className={styles.quantityCounterWrapper}>
        <QuantityCounter />
      </div>
      <p className={styles.cardItemPrice}>{item.price} грн</p>
      <Button className={styles.buttonDelete} onClick={() => handleRemoveFromFavorites()} text="Видалити"/>
    </li>
  );
}

export default FavoritesItem;

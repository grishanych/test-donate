import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeFavorites } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import { GET_FAVORITES } from "../../../endpoints/endpoints";
import QuantityCounter from "../../productView/CounterQuantity";
import styles from "./Favorites.module.scss";

function FavoritesItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((cartItem) => cartItem.itemNo === item.itemNo));

  async function getFavoritesFromServer() {
    try {
      const response = await axios.get(GET_FAVORITES);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }

  async function deleteFavoritesFromServer() {
    try {
      const cartData = await getFavoritesFromServer();
      
      if (cartData && Array.isArray(cartData.favorites)) {
      // eslint-disable-next-line max-len
        const updatedFavorites = cartData.favorites.filter((favItem) => favItem.itemNo !== item.itemNo);
  
        const updatedCustomer = {
          favorites: {
            items: updatedFavorites,
          },
        };
        
        axios
          .put("http://localhost:4000/api/customers", updatedCustomer)
          // .then((response) => console.log(response))
          .catch((error) => console.error("Помилка при оновленні даних:", error));
      }
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  }



  const handleRemoveFromFavorites = () => {
    if (isItemInFavorites) {
      // let countProducts = JSON.parse(localStorage.getItem("CountFavoritesProducts")) || 0;
      // countProducts -= 1;
      // localStorage.setItem("CountFavoritesProducts", JSON.stringify(countProducts));
      
      const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Favorites", JSON.stringify(newProducts));

      deleteFavoritesFromServer();
      
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
      <p className={styles.cardItemPrice}>
        {item.price}
        {" "}
        грн
      </p>
      <Button className={styles.buttonDelete} onClick={() => handleRemoveFromFavorites()} text="Видалити" />
    </li>
  );
}

export default FavoritesItem;

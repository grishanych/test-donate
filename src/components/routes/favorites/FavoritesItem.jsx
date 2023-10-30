import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { GET_FAVORITES, REGISTRATION_URL } from "../../../endpoints/endpoints";
// import QuantityCounter from "../../productView/CounterQuantity";
import { removeFavorites } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import styles from "./Favorites.module.scss";
import DeleteIcon from "../cart/DeleteIcon";



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
          .put(REGISTRATION_URL, updatedCustomer)
          // .then((response) => console.log(response))
          .catch((error) => console.error("Помилка при оновленні даних:", error));
      }
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  }


  const handleRemoveFromFavorites = () => {
    if (isItemInFavorites) {
      const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Favorites", JSON.stringify(newProducts));

      deleteFavoritesFromServer();
      
      dispatch(removeFavorites(item.itemNo));
      dispatch(counterDecrement());
    }
  };
  
   
  return (
    <tbody key={item.id} className={styles.cardItemWrapper}>
      <tr>
        <td>
          <div className={styles.productInfo}>
            <Link to={`/product/${item.itemNo}`}>
              <div className={styles.cardItemImageWrapper}>
                <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
              </div>
            </Link>
            <div className={styles.nameContainer}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.sku}>
                <span>Код товару:</span>
                {" "}
                {item.itemNo}
              </p>
            </div>
          </div>
        </td>
        <td>
          <div className={styles.cardItemPrice}>
            {item.price || item.currentPrice ? (
              <div>
                {item.price || item.currentPrice}
                {" "}
                грн
              </div>
            ) : "-"}
          </div>
        </td>
        <td>
          <Button style={{ backgroundColor: "none" }} onClick={() => handleRemoveFromFavorites()}>
            <DeleteIcon />
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default FavoritesItem;

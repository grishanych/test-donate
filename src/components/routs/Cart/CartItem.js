import { useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../../redux/actions/cartActions";

function CartItem({ item }) {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
   
    dispatch(removeFromCart(productId));
    console.log(productId)
  };
  
  return (
    <li key={item.id} className={styles.cardItemWrapper}>
      <div className={styles.cardItemImageWrapper}>
        <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
      </div>
      <p>{item.name}</p>
      {item.price ? <p className={styles.cardItemPrice}>{item.price} грн</p> : null}
      {item.isLot === "Благодійний лот" ? (
        <p className={styles.decorLot}>ЛОТ</p>
      ) : item.isLot === "Донат" ? (
        <p className={styles.decorDonat}>ДОНАТ</p>
      ) : null}
<button onClick={() => handleRemoveFromCart(item.name)}>Видалити</button>
    </li>
  );
}

export default CartItem;

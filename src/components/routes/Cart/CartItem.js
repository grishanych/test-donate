import { useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import { useEffect, useState } from "react";



function CartItem({ item }) {

  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(counterDecrement())
    dispatch(removeFromCart(productId));
    

  };

 

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  if (items) {
   setItems(items);
  }
}, []);

  
  
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
      <Button className={styles.buttonDelete} onClick={() => handleRemoveFromCart(item.name)} text="Видалити"/>
    </li>
  );
}

export default CartItem;

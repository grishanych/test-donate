import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import QuantityCounter from "./../../productView/CounterQuantity";
import styles from "./Cart.module.scss";

function CartItem({ item }) {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(counterDecrement())
    dispatch(removeFromCart(productId));
  };
  
  // const products = useSelector((state) => state.products.items);
  
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
      <Button className={styles.buttonDelete} onClick={() => handleRemoveFromCart(item.name)} text="Видалити"/>
    </li>
  );
}

export default CartItem;

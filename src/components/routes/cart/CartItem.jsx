import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import QuantityCounter from "./../../productView/CounterQuantity";
import styles from "./Cart.module.scss";


function CartItem({ item }) {
  const dispatch = useDispatch();
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === item.itemNo));
  
  const handleRemoveFromCart = () => {
    if (isItemInCart) {
      let countProducts = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
      countProducts -= 1;
      localStorage.setItem("CountCartProducts", JSON.stringify(countProducts));
      
      const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Cart", JSON.stringify(newProducts));
      
      dispatch(removeFromCart(item.itemNo));
      dispatch(counterDecrement());
    }
  };
  
  
  return (
    <li key={item.id} className={styles.cardItemWrapper}>
      <Link to={`/product/${item.itemNo}`}>
        <div className={styles.cardItemImageWrapper}>
          <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
        </div>
      </Link>
      <p>{item.name}</p>
      <div className={styles.quantityCounterWrapper}>
        <QuantityCounter />
      </div>
      <p className={styles.cardItemPrice}>{item.price} грн</p>
      <Button className={styles.buttonDelete} onClick={() => handleRemoveFromCart()} text="Видалити"/>
    </li>
  );
}

export default CartItem;

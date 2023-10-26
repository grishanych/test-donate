import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import { NEW_CART_URL } from "../../../endpoints/endpoints";
import QuantityCounter from "../../productView/CounterQuantity";
import styles from "./Cart.module.scss";


function CartItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === item.itemNo));

  // console.log(item);
  // const cld = new Cloudinary({
  //   cloud: { cloudName: "dzaxltnel" },
  //   url: { secure: true },
  // });
  // const myImage = cld.image(item.nameCloudinary[0]);
  // const imageURL = myImage.toURL();

  async function getCartFromServer() {
    try {
      const response = await axios.get(NEW_CART_URL);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }


  // eslint-disable-next-line no-underscore-dangle
  function deleteCartFromServer() {
    const cartData = getCartFromServer();
    if (cartData !== null) {
      // eslint-disable-next-line no-underscore-dangle
      const idToDelete = item._id ? item._id : item.id;
      axios
        .delete(`http://localhost:4000/api/cart/${idToDelete}`)
        // .then((updatedCart) => {
        //   console.log(updatedCart);
        // })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleRemoveFromCart = () => {
    if (isItemInCart) {
      let countProducts = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
      countProducts -= 1;
      localStorage.setItem("CountCartProducts", JSON.stringify(countProducts));
      
      const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Cart", JSON.stringify(newProducts));

      deleteCartFromServer();
      
      dispatch(removeFromCart(item.itemNo));
      dispatch(counterDecrement());
    }
  };
  
  
  return (
    <li key={item.id} className={styles.cardItemWrapper}>
      <Link to={`/product/${item.itemNo}`}>
        <div className={styles.cardItemImageWrapper}>
          <img alt={item.name} className={styles.cardItemImage} />
        </div>
      </Link>
      <p>{item.name}</p>
      <div className={styles.quantityCounterWrapper}>
        <QuantityCounter />
      </div>
      <p className={styles.cardItemPrice}>
        {item.currentPrice}
        {" "}
        грн
      </p>
      <Button className={styles.buttonDelete} onClick={handleRemoveFromCart} text="Видалити" />
    </li>
  );
}

export default CartItem;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import Basket from "./icons/basket/Basket";
import Heart from "./icons/heart/Heart";
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";
import styles from "./Card.module.scss";
// TODO
import sendCart from "../../api/sendCart";
import { NEW_CART_URL } from "../../endpoints/endpoints";
// import updateCart from "../../api/updateCart";


export function Icons({
  itemNo, name, price, imageURL, id, quantity, category,
}) {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
  // eslint-disable-next-line max-len
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));
  const product = {
    itemNo, name, price, imageURL, id, quantity,
  };

  async function getCartFromServer() {
    try {
      const response = await axios.get(NEW_CART_URL);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }

  async function checkCartFromServer() {
    try {
      const cartData = await getCartFromServer();
      if (cartData === null) {
        sendCart();
      } else if (cartData !== null) {
        axios
          .put(`http://localhost:4000/api/cart/${product.id}`)
          // .then((updatedCart) => {
          //   console.log(updatedCart);
          // })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  }


  const handleAddToCart = () => {
    let countProducts = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
    
    if (!isItemInCart) {
      const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
      currentProducts.push(product);
      countProducts += 1;
      localStorage.setItem("Cart", JSON.stringify(currentProducts));
      localStorage.setItem("CountCartProducts", JSON.stringify(countProducts));
      
      // TODO
      checkCartFromServer();

      dispatch(addToCart(product));
      dispatch(counterIncrement());
    }
  };

  const handleAddFavorites = () => {
    let countProducts = JSON.parse(localStorage.getItem("CountFavoritesProducts")) || 0;
    
    if (!isItemInFavorites) {
      const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
      currentProducts.push(product);
      countProducts += 1;
      localStorage.setItem("Favorites", JSON.stringify(currentProducts));
      localStorage.setItem("CountFavoritesProducts", JSON.stringify(countProducts));
      
      dispatch(addFavorites(product));
      dispatch(counterIncrement());
    }
  };


  return (
    <div className={styles.cardItemIconsWrapper}>
      {category !== "Благодійний лот" && category !== "Донат"
        ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div className={styles.cardItemIconWrapper} onClick={handleAddToCart}>
            { isItemInCart ? <BasketFull /> : <Basket /> }
          </div>
        )
        : null}
      <div className={styles.cardItemIconWrapper} onClick={handleAddFavorites}>
        { isItemInFavorites ? <HeartFull /> : <Heart /> }
      </div>
    </div>
  );
}


Icons.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  imageURL: PropTypes.string.isRequired,
};

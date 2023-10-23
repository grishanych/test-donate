/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import Basket from "./icons/basket/Basket";
import Heart from "./icons/heart/Heart";
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";
import styles from "./Card.module.scss";


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


  const handleAddToCart = () => {
    let countProducts = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
    
    if (!isItemInCart) {
      const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
      currentProducts.push(product);
      countProducts += 1;
      localStorage.setItem("Cart", JSON.stringify(currentProducts));
      localStorage.setItem("CountCartProducts", JSON.stringify(countProducts));
      
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

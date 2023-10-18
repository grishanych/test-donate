import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import Basket from "./icons/basket/Basket"
import Heart from "./icons/heart/Heart"
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";
// import useSetAuthToken from "../../scripts/setAuthToken"
import sendCart from "../../api/sendCart";
import styles from "./Card.module.scss"
import PropTypes from "prop-types"


export function Icons({ itemNo, name, price, imageURL, id, quantity }) {

  const dispatch = useDispatch();
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));
  // const { token, setAuthToken } = useSetAuthToken();
  const product = { itemNo, name, price, imageURL, id, quantity };

  const handleAddToCart = () => {
    // token
    // setAuthToken();
    
    // to the store +1
    dispatch(counterIncrement())

    // ! to the server
    // sendCart(id);

    // to the localStorage
    const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
    const isAlreadyInCart = currentProducts.some((cartItem) => cartItem.itemNo === itemNo);

    if (!isAlreadyInCart) {
      currentProducts.push(product);
      localStorage.setItem("Cart", JSON.stringify(currentProducts));
    }

    // to the store product
    if (!isItemInCart) {
      dispatch(addToCart(currentProducts));
    }
  }

  const handleAddFavorites = () => {
    dispatch(counterIncrement());
    if (!isItemInFavorites) {
      dispatch(addFavorites(product));
    }
  }


  return (
    <div className={styles.cardItemIconsWrapper}>
      <div className={styles.cardItemIconWrapper} onClick={handleAddToCart}>
        { isItemInCart ? <BasketFull /> : <Basket /> }
      </div>
      <div className={styles.cardItemIconWrapper} onClick={handleAddFavorites}>
        { isItemInFavorites ? <HeartFull /> : <Heart /> }
      </div>
    </div>
  )
}


Icons.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  imageURL: PropTypes.string.isRequired
};
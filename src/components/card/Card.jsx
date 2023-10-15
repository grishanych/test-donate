import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import Basket from "./icons/basket/Basket";
import Heart from "./icons/heart/Heart";
import styles from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";

export function Card({ itemNo, name, price, nameCloudinary, isLot }) {
  const dispatch = useDispatch();
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const isItemInCart = useSelector((state) =>
    state.cart.items.some((cartItem) => cartItem.itemNo === itemNo)
  );
  const isItemInFavorites = useSelector((state) =>
    state.favorites.items.some((favItem) => favItem.itemNo === itemNo)
  );

  const [itemInCart, setItemInCart] = useState(false);
  const [itemInFavorites, setItemInFavorites] = useState(false);

  // for working with Cloudinary
  const cld = new Cloudinary({
    cloud: { cloudName: "dzaxltnel" },
    url: { secure: true },
  });
  const myImage = cld.image(`${nameCloudinary}`);
  const imageURL = myImage.toURL();

  // useEffect(() => {
  //   setItemInCart(isItemInCart);
  //   setItemInFavorites(isItemInFavorites);
  // }, [isItemInCart, isItemInFavorites]);

  const handleAddToCart = () => {
    dispatch(counterIncrement());
    const product = {
      itemNo,
      name,
      price,
      imageURL,
      isLot,
    };

    // Додайте перевірку наявності товару в `localStorage`
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (!cartItemsFromStorage.find((item) => item.itemNo === itemNo)) {
      cartItemsFromStorage.push(product.itemNo);
      localStorage.setItem("cartItems", JSON.stringify(cartItemsFromStorage));
    }

    dispatch(addToCart(product));
    setItemInCart(true);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const handleAddFavorites = () => {
    dispatch(counterIncrement());
    const prod = {
      itemNo,
      name,
      price,
      imageURL,
      isLot,
    };

    // Додайте перевірку наявності товару в `localStorage`
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    if (!favoritesFromStorage.find((item) => item.itemNo === itemNo)) {
      favoritesFromStorage.push(prod.itemNo);
      localStorage.setItem("favoriteItems", JSON.stringify(favoritesFromStorage));
    }

    dispatch(addFavorites(prod));
    setItemInFavorites(true);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 1000);
  };

  // Оновлення значків кошика та обраних товарів в залежності від `localStorage`
  useEffect(() => {
    // Отримайте дані з `localStorage` та оновіть значки товарів
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    
    setItemInCart(cartItemsFromStorage.some((item) => item === itemNo));
    setItemInFavorites(favoritesFromStorage.some((item) => item === itemNo));
  }, []);

  const renderActionButton = () => {
    if (itemInCart) {
      return (
        <div className={styles.cardItemIconWrapperAfterClick}>
          <div className={styles.inBasket}> <BasketFull /></div>
          <a className={styles.cardItemIconWrapperAfterClick} href="#1" onClick={handleAddFavorites}>
            {itemInFavorites ? <HeartFull /> : <Heart />}
          </a>
        </div>
      );
    } else if (itemInFavorites) {
      return (
        <div className={styles.cardItemIconWrapperAfterClick}>
          <div className={styles.inFavorites}>  <HeartFull /></div>
          <a className={styles.cardItemIconWrapperAfterClick} href="#1" onClick={handleAddToCart}>
            {itemInCart ? <HeartFull /> : <Basket />}
          </a>
        </div>
      );
    } else {
      return (
        <>
          <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
            {itemInCart ? "У кошику" : <Basket />}
          </a>
          <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
            {itemInFavorites ? "В обраному" : <Heart />}
          </a>
        </>
      );
    }
  };

//   const renderActionButton = () => {
//   if (itemInCart && itemInFavorites) {
//     return (
//       <div className={styles.cardItemIconWrapperAfterClick}>
//         <div className={styles.inBasket}> <BasketFull /></div>
//         <div className={styles.inFavorites}>  <HeartFull /></div>
//       </div>
//     );
//   } else if (itemInCart) {
//     return (
//       <div className={styles.cardItemIconWrapperAfterClick}>
//         <div className={styles.inBasket}> <BasketFull /></div>
//         <a className={styles.cardItemIconWrapperAfterClick} href="#1" onClick={handleAddFavorites}>
//           {itemInFavorites ? <HeartFull /> : <Heart />}
//         </a>
//       </div>
//     );
//   } else if (itemInFavorites) {
//     return (
//       <div className={styles.cardItemIconWrapperAfterClick}>
//         <div className={styles.inFavorites}>  <HeartFull /></div>
//         <a className={styles.cardItemIconWrapperAfterClick} href="#1" onClick={handleAddToCart}>
//           {itemInCart ? <BasketFull /> : <Basket />}
//         </a>
//       </div>
//     );
//   } else {
//     return (
//       <>
//         <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
//           {itemInCart ? "У кошику" : <Basket />}
//         </a>
//         <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
//           {itemInFavorites ? "В обраному" : <Heart />}
//         </a>
//       </>
//     );
//   }
// };


  return (
    <li className={styles.cardItemWrapper}>
      {isLot === "Благодійний лот" ?
        <div className={styles.decorLot}>ЛОТ</div>
        : isLot === "Донат" ?
          <div className={styles.decorDonat}>ДОНАТ</div>
          :
          null}
      <div className={styles.cardItemImageWrapper}>
        <Link to={`/product/${itemNo}`}>
          <img src={imageURL} className={styles.cardItemImage} alt="My img" />
        </Link>
      </div>
      <Link to={`/product/${itemNo}`}>
        <div className={styles.cardItemTextWrapper}>
          <h3 className={styles.cardItemHeadline}>{name}</h3>
          {price ?
            <p className={styles.cardItemPrice}>{price} грн</p>
            :
            null}
        </div>
      </Link>
      <div className={styles.cardItemIconsWrapper}>{renderActionButton()}</div>
      {showAddedMessage && (
        <p className={styles.addedToMessage}>Додано до {
          itemInCart ? "кошика" : itemInFavorites ? "обраного" : null
        }</p>
      )}
      <div className={styles.cardItemDecor}></div>
    </li>
  );
}

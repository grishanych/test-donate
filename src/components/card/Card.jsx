import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import Basket from "./icons/basket/Basket"
import Heart from "./icons/heart/Heart"
import styles from "./Card.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";

export function Card({itemNo, name, price, nameCloudinary, isLot }) {

    const dispatch = useDispatch();
    const [showAddedMessage, setShowAddedMessage] = useState(false);
    const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
    const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));

    const [itemInCart, setItemInCart] = useState(false);
    const [itemInFavorites, setItemInFavorites] = useState(false);

    // for working with Cloudinary
    const cld = new Cloudinary({
        cloud: { cloudName: "dzaxltnel" },
        url: { secure: true }
    });
    const myImage = cld.image(`${nameCloudinary}`);
    const imageURL = myImage.toURL();


    const handleAddToCart = () => {
        dispatch(counterIncrement())
        const product = {
            itemNo,
            name,
            price,
            imageURL,
            isLot,
        };
        // const isAlreadyInCart = cartItems.some(item => item.itemNo === product.itemNo);
        if (!isItemInCart) {
            dispatch(addToCart(product));
            setItemInCart(true);
            setShowAddedMessage(true);
         setTimeout(() => setShowAddedMessage(false), 2000);
        }
    }


    const handleAddFavorites = () => {
        dispatch(counterIncrement());
        const prod= {
            itemNo,
            name,
            price,
            imageURL,
            isLot,
        };
        // const isAlreadyInFavorites = favoriteItems.some(item => item.itemNo === prod.itemNo);
        if (!isItemInFavorites) {
            dispatch(addFavorites(prod));
            setItemInFavorites(true); 
            setShowAddedMessage(true);
            setTimeout(() => setShowAddedMessage(false), 2000);
        }
    }

    // const renderActionButton = () => {
    //     if (isItemInCart) {
    //       return (
    //         <>
    //         {/* <p className={styles.alreadyAddedMessage}>
    //           Товар вже в кошику
    //         </p> */}
    //         <BasketFull />
    //         <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
    //         <Heart />
    //       </a>
    //       </>
    //       );
    //     } 
    //     if (isItemInFavorites) {
    //         return (
    //           <>
    //           {/* <p className={styles.alreadyAddedMessage}>
    //             Товар вже в кошику
    //           </p> */}
    //           <HeartFull />
    //           <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
    //           <Basket />
    //         </a>
    //         </>
    //         );
    //       } 
    //     else {
    //       return (
    //         <>
    //           <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
    //             <Basket />
    //           </a>
    //           <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
    //             <Heart />
    //           </a>
    //         </>
    //       );
    //     }
    //   };

    const renderActionButton = () => {
        if (isItemInCart) {
          return (
            <>
              <BasketFull />
              <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
                {isItemInFavorites ? "В обраному" : <Heart />}
              </a>
            </>
          );
        }
        if (isItemInFavorites) {
          return (
            <>
              <HeartFull />
              <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
                {isItemInCart ? "У кошику" : <Basket />}
              </a>
            </>
          );
        } else {
          return (
            <>
              <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
                {isItemInCart ? "У кошику" : <Basket />}
              </a>
              <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
                {isItemInCart ? "В обраному" : <Heart />}
              </a>
            </>
          );
        }
      };

    return(
        <li className={styles.cardItemWrapper}>
            {isLot === "Благодійний лот" ? 
                <div className={styles.decorLot}>ЛОТ</div>
            : isLot === "Донат" ? 
                <div className={styles.decorDonat}>ДОНАТ</div>
            :
                null}
                <div className={styles.cardItemImageWrapper}>
                    <Link to={`/product/${itemNo}`}>
                        <img src={imageURL} className={styles.cardItemImage} alt="My img"/>
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
        <p className={styles.addedToMessage}>Додано до {isItemInCart ? "кошику" : "обраного"}</p>
      )}
            <div className={styles.cardItemDecor}></div>
        </li>
    )
}
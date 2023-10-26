/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import { Icons } from "./Icons";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import sendCart from "../../api/sendCart";
import { NEW_CART_URL, GET_FAVORITES } from "../../endpoints/endpoints";
import styles from "./Card.module.scss";


export function Card({
  itemNo, name, price, goal, nameCloudinary, category, id, quantity,
}) {
  const dispatch = useDispatch();
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);

  // for working with Cloudinary
  const cld = new Cloudinary({
    cloud: { cloudName: "dzaxltnel" },
    url: { secure: true },
  });
  const myImage = cld.image(`${nameCloudinary}`);
  const imageURL = myImage.toURL();



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

  async function getFavoritesFromServer() {
    try {
      const response = await axios.get(GET_FAVORITES);
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


  async function checkFavoritesFromServer() {
    try {
      const cartData = await getFavoritesFromServer();
      
      if (cartData && cartData.favorites && Array.isArray(cartData.favorites.items)) {
        const updatedFavoritesItems = [...cartData.favorites.items, product];
    
        const updatedCustomer = {
          favorites: {
            items: updatedFavoritesItems,
          },
        };
        
        axios
          .put("http://localhost:4000/api/customers", updatedCustomer)
          .then((response) => console.log(response));
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
      
      checkCartFromServer();

      dispatch(addToCart(product));
      dispatch(counterIncrement());
      setIsModalVisible(true);
      setIsModalVisibleTwo(true);

      setTimeout(() => {
        setIsModalVisibleTwo(false);
      }, 1000);

      setTimeout(() => {
        setIsModalVisible(false);
      }, 1000);
    }
  };

  const handleAddFavorites = () => {
    if (!isItemInFavorites) {
      const currentProducts = JSON.parse(localStorage.getItem("Favorites")) || [];
      currentProducts.push(product);
      localStorage.setItem("Favorites", JSON.stringify(currentProducts));

      checkFavoritesFromServer();
      
      dispatch(addFavorites(product));
      dispatch(counterIncrement());
      setIsModalVisible(true);
      setIsModalVisibleTwo(true);

      setTimeout(() => {
        setIsModalVisibleTwo(false);
      }, 1000);

      setTimeout(() => {
        setIsModalVisible(false);
      }, 1000);
    }
  };


  return (
    <li className={styles.cardItemWrapper}>
      {category === "Благодійний лот"
        ? <div className={styles.decorLot}>ЛОТ</div>
        : category === "Донат"
          ? <div className={styles.decorDonat}>ДОНАТ</div>
          : null}
      <div className={styles.cardItemImageWrapper}>
        <Link to={`/product/${itemNo}`}>
          <img src={imageURL} className={styles.cardItemImage} alt="My img" />
        </Link>
      </div>
      <Link to={`/product/${itemNo}`}>
        <div className={styles.cardItemTextWrapper}>
          <h3 className={styles.cardItemHeadline}>{name}</h3>
          {price
            ? (
              <p className={styles.cardItemPrice}>
                Ціна:
                {price}
                {" "}
                грн
              </p>
            )
            : goal && category === "Благодійний лот"
              ? (
                <p className={styles.cardItemGoalLot}>
                  Ставка:
                  {goal}
                  {" "}
                  грн
                </p>
              )
              : goal && category === "Донат"
                ? (
                  <p className={styles.cardItemGoalDonat}>
                    Мета:
                    {goal}
                    {" "}
                    грн
                  </p>
                )
                : null}
        </div>
      </Link>
      <Icons imageURL={imageURL} itemNo={itemNo} name={name} price={price} id={id} quantity={1} category={category} handleAddFavorites={handleAddFavorites} handleAddToCart={handleAddToCart} isModalVisible={isModalVisible} isModalVisibleTwo={isModalVisibleTwo} />
      <div className={styles.cardItemDecor} />
    </li>
  );
}


Card.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  nameCloudinary: PropTypes.string.isRequired,
};

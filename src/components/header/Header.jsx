/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import Cart from "./icons/cart/IconCart";
import IconEnter from "./icons/enter/IconEnter";
import IconOut from "./icons/enter/IconOut";
import { logOut } from "../../redux/actions/loggedInActions";
import Button from "../button/Button";
import Navigation from "./Navigation";
import { resetCart, resetFavorites } from "../../redux/actions/cartActions";
import { setLoggedOutUser } from "../../redux/actions/userActions";
import { IconSearchMobile } from "./icons/search/IconSearch";
import HeartFavorite from "./icons/favorites/Heart";
import BurgerMenu from "./BurgerMenu";
// import { REGISTRATION_URL } from "../../endpoints/endpoints";
import logo from "../footer/icons/logo.png";
import styles from "./Header.module.scss";


function Header() {
  const cartCount = useSelector((state) => state.cart.itemCount);
  const favoriteCount = useSelector((state) => state.favorites.itemCount);
  const isUserLoggedIn = useSelector((state) => state.username.username);
  const dispatch = useDispatch();

  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const toggleBar = () => {
    setShowBurgerMenu(showBurgerMenu);
    if (showInput) {
      setShowInput(false);
    }
  };

  // async function updateFavoritesToServer(newFavorites) {
  //   const updatedCustomer = {
  //     favorites: newFavorites,
  //   };

  //   try {
  //     const response = await axios.put(REGISTRATION_URL, updatedCustomer);
  //     return response.data.favorites;
  //   } catch (err) {
  //     console.error("Помилка при отриманні даних:", err);
  //     return null;
  //   }
  // }

  async function doLogOut() {
    try {
      // const currentFavorites = JSON.parse(localStorage.getItem("Favorites")) || [];
      // if (currentFavorites.length > 0) {
      //   await updateFavoritesToServer(currentFavorites);
      // }
  
      localStorage.removeItem("userLogin");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("CountCartProducts");
      localStorage.removeItem("CountFavoritesProducts");
      localStorage.removeItem("Cart");
      localStorage.removeItem("token");
      localStorage.removeItem("Favorites");
  
      dispatch(resetCart());
      dispatch(resetFavorites());
      dispatch(logOut());
      dispatch(setLoggedOutUser());
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  }
  
  const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
  const [inputValue, setInputValue] = useState(inputValueFromRedux);

  useEffect(() => {
    setInputValue(inputValueFromRedux);
  }, [inputValueFromRedux]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(updateInputValue(value));
    setInputValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mobileHeader}>
        <Button
          toPage={`/products-search?query=${inputValue}`}
          type="submit"
          className={styles.buttonMobileHeader}
          width="45px"
          color=""
        >
          <IconSearchMobile />
        </Button>
        <input
          className={styles.inputMobileHeader}
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Знайти..."
        />

        {isMobileScreen
          && <BurgerMenu toggleBar={toggleBar} />}
      </div>
         
      <div className={styles.headerLaptop}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {showBurgerMenu && <BurgerMenu />}
        <Navigation />

        {isUserLoggedIn ? (
          <Link to="/favorites" className={styles.navRightSideMenu}>
            <HeartFavorite />
            {favoriteCount === 0 ? null : <span>{favoriteCount}</span>}
          </Link>
        ) : null}
        <Link to="/cart" className={styles.navRightSideMenu}>
          <Cart />
          {cartCount === 0 ? null : <span>{cartCount}</span>}
        </Link>

        <Button toPage={isUserLoggedIn ? "/" : "/log-in"} width="40px" padding="10px" onClick={isUserLoggedIn ? doLogOut : null}>
          {isUserLoggedIn ? <IconOut /> : <IconEnter /> }
        </Button>
      </div>
    </header>
  );
}

export default Header;

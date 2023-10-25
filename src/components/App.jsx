import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
// ! var 2
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { initializeCart, initializeFavorites } from "../redux/actions/cartActions";
import { setAuthToken } from "../redux/actions/authActions";
import { getProducts } from "../api/getProducts";
import Context from "./Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { logIn } from "../redux/actions/loggedInActions";
import { setProducts } from "../redux/actions/productActions";
import ScrollToTop from "./ScrollToTop";
import { FormButton } from "./button/Button";
import { NEW_CART_URL } from "../endpoints/endpoints";
import AppArrow from "../images/appArrow/AppArrow";
import styles from "./App.module.scss";


function App() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextData = { isLinkVisible, setIsLinkVisible };
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(logIn());
    }
  }, [dispatch]);

  useEffect(() => {
    // if (isLoggedIn) {
    const storedCartItems = JSON.parse(localStorage.getItem("Cart")) || [];
    const storedFavoriteItems = JSON.parse(localStorage.getItem("Favorites")) || [];
      
    if (storedCartItems.length > 0) {
      dispatch(initializeCart(storedCartItems));
    }
    if (storedFavoriteItems.length > 0) {
      dispatch(initializeFavorites(storedFavoriteItems));
    }
    // }
  }, [dispatch]);

  // ! var 1
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const cartData = await getCartFromServer();
  //     if (cartData !== null) {
  //       dispatch(initializeCart(cartData.products));
  //     }
  //   };

  //   fetchData();
  // }, [dispatch, getCartFromServer]);

  // async function getCartFromServer() {
  //   if (isLoggedIn) {
  //     try {
  //       const response = await axios.get(NEW_CART_URL);
  //       return response.data;
  //     } catch (err) {
  //       console.error("Помилка при отриманні даних:", err);
  //       return null;
  //     }
  //   } else {
  //     console.log("Користувач не авторизований");
  //     return null;
  //   }
  // }

  // ! var 2
  // useEffect(() => {
  //   const getCartFromServer = async () => {
  //     if (isLoggedIn) {
  //       try {
  //         const response = await axios.get(NEW_CART_URL);
  //         return response.data;
  //       } catch (err) {
  //         console.error("Помилка при отриманні даних:", err);
  //         return null;
  //       }
  //     } else {
  //       // ! ?
  //       console.log("Користувач не авторизований");
  //       return null;
  //     }
  //   };
    
  //   const fetchData = async () => {
  //     const cartData = await getCartFromServer();
  //     if (cartData !== null) {
  //       dispatch(initializeCart(cartData.products));
  //     }
  //   };
  
  //   fetchData();
  // }, [dispatch, isLoggedIn]);

  // ! var 3
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const getCartFromServer = async () => {
      if (isLoggedIn) {
        try {
          const response = await axios.get(NEW_CART_URL);
          return response.data;
        } catch (err) {
          console.error("Помилка при отриманні даних:", err);
          return null;
        }
      } else {
        console.log("Користувач не авторизований");
        return null;
      }
    };
    
    const fetchData = async () => {
      const cartData = await getCartFromServer();
      if (cartData !== null && Array.isArray(cartData.products)) {
        const productArray = cartData.products.map((item) => item.product);
        console.log(productArray);
        dispatch(initializeCart(productArray));
      }
    };
    
    if (isLoggedIn) {
      fetchData();
    }
  }, [dispatch, isLoggedIn]);

  
  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.error("Помилка при отриманні товарів:", error);
      });
  }, [dispatch]);

  // Arrow button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setIsVisible(show);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <ScrollToTop />
        <Context.Provider value={contextData}>
          <Header />
          <Main>
            <AppRoutes />
          </Main>
          <Footer />

          {isVisible && (
          <FormButton padding="6px 0px" width="50px" onClick={scrollToTop} className={styles.scrollToTopButton}>
            <AppArrow />
          </FormButton>
          )}

        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

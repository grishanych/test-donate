import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
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

  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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

  // В App.js або де визначено головний компонент додатку

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCartFromServer();
      if (cartData !== null) {
        dispatch(initializeCart(cartData.products));
      }
    };

    fetchData();
  }, [dispatch]);

  async function getCartFromServer() {
    try {
      const response = await axios.get(NEW_CART_URL);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }

  useEffect(() => {
    getProducts()
      .then((data) => {
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

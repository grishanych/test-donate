import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from "react-redux"
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AppRoutes from "./routes/AppRoutes";
import { initializeCart, initializeFavorites } from "../redux/actions/cartActions";
import { setAuthToken } from "../redux/actions/authActions";
import styles from "./App.module.scss";
import { getProducts } from "../api/getProducts";
import { setProducts } from "../redux/actions/productActions";

function App() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const contextData = { isLinkVisible, setIsLinkVisible };
  const dispatch = useDispatch();

    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      dispatch(setAuthToken(token));
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

  useEffect(() => {
    getProducts()
      .then(data => {
        dispatch(setProducts(data));
      })
      .catch(error => {
        console.error("Помилка при отриманні товарів:", error);
      });
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Context.Provider value={contextData}>
          <Header/>
          <Main>
            <AppRoutes/>
          </Main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

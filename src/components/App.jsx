import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux"
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AppRoutes from "./routes/AppRoutes";
// import { addToCart } from "../redux/actions/cartActions";
import { addMultipleToCart } from "../redux/actions/cartActions";
import { setAuthToken } from "../redux/actions/authActions";
import sendCart from "../api/sendCart";
import styles from "./App.module.scss";


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
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("Cart")) || [];

      if (cartFromLocalStorage.length > 0) {
        // dispatch(addToCart(cartFromLocalStorage));
        dispatch(addMultipleToCart(cartFromLocalStorage)); 
        sendCart();
      }
    // }
  }, [
    // isLoggedIn,
    dispatch]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Context.Provider value={contextData}>
          <Header />
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

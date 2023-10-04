import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AboutUs from "../components/routs/AboutUs"
import Cart from "../components/routs/Cart"
import Reports from "../components/routs/Reports"
import Blog from "../components/routs/Blog"
import Contacts from "../components/routs/Contacts"
import Home from "./routs/home/Home"
import Categorys from "../components/routs/Categories"
import LogIn from "./routs/login/LogIn"
import styles from "./App.module.scss"


function App() {

  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const contextData = { isLinkVisible, setIsLinkVisible };


  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Context.Provider value={contextData}>
          <Header />
          <Main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/categories" element={<Categorys/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/log-in" element={<LogIn/>}/>
            </Routes>
          </Main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>

  );
}

export default App;

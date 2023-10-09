import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux"
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AboutUs from "../components/routs/AboutUs"
import Cart from "./routs/Cart/Cart"
import Reports from "../components/routs/Reports"
import Blog from "../components/routs/Blog"
import Contacts from "../components/routs/Contacts"
import Home from "../components/routs/Home"
import Categorys from "../components/routs/Categories"
import Favorites from "./routs/Favorites/Favorites";
import DeliveryPayment from "./routs/DeliveryPayment";
import Returns from "./routs/Returns";
import PrivacyPolicy from "./routs/PrivacyPolicy";
import ProductPage from "./routs/ProductPage";



function App() {

  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const contextData = { isLinkVisible, setIsLinkVisible };

  return (
    <div className="App">
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
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/delivery-payment" element={<DeliveryPayment />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </Main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>

  );
}

export default App;

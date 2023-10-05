import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AboutUs from "./routes/AboutUs"
import Cart from "./routes/Cart"
import Reports from "./routes/Reports"
import Blog from "./routes/Blog"
import Contacts from "./routes/Contacts"
import Home from "./routes/home/Home"
import Categorys from "./routes/Categories"
import CustomerLogIn from "./routes/adminRoutes/customerLogin/CustomerLogIn"
import AdminLogIn from "../components/routes/adminRoutes/adminLogin/AdminLogIn"
import AdminPage from "./routes/adminRoutes/adminPage/AdminPage"
import CustomerPage from "./routes/adminRoutes/customerPage/CustomerPage"
import CustomerRegistration from './routes/adminRoutes/customerRegistration/CustomerRegistration';
import AdminRegistration from './routes/adminRoutes/adminRegistration/AdminRegistration';
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
                <Route path="/log-in" element={<CustomerLogIn/>}/>
                <Route path="/account" element={<CustomerPage/>}/>
                <Route path="/admin" element={<AdminLogIn/>}/>
                <Route path="/adm-page" element={<AdminPage/>}/>
                <Route path="/registration" element={<CustomerRegistration/>}/>
                <Route path="/adm-registration" element={<AdminRegistration/>}/>
            </Routes>
          </Main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>

  );
}

export default App;

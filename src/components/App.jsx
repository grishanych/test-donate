import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { increment, decrement, reset } from '../redux/slices/counterSlice';
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AboutUs from "../components/routs/AboutUs"
import Cart from "../components/routs/Cart"
import Reports from "../components/routs/Reports"
import Blog from "../components/routs/Blog"
import Contacts from "../components/routs/Contacts"
import Home from "../components/routs/Home"
import Categorys from "../components/routs/Categories"



function App() {

  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const contextData = { isLinkVisible, setIsLinkVisible };

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
            </Routes>
          </Main>
          <Footer />
          <h1>Лічильник: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Збільшити</button>
      <button onClick={() => dispatch(decrement())}>Зменшити</button>
      <button onClick={() => dispatch(reset())}>Скинути</button>
        </Context.Provider>
      </BrowserRouter>
    </div>

  );
}

export default App;

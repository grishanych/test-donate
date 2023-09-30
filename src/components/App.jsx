import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
// import styles from "./App.module.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardList from "./cardlist/CardList"
import AboutUs from "./header/AboutUs"
import Categories from "./header/Categories"
import Cart from "./header/Cart"
import Reports from "./header/Reports"
import Blog from "./header/Blog"
import Contacts from "./header/Contacts"


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
              <Route path="/" element={<CardList />}/>
              <Route path="/about-us" element={<AboutUs/>}/>
              <Route path="/categories" element={<Categories/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/reports" element={<Reports/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

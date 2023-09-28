import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Header/Home';
import AboutUs from './components/Header/AboutUs';
import Categories from './components/Header/Categories';
import Cart from './components/Header/Cart';
import Report from './components/Header/Report';
import Blog from './components/Header/Blog';
import Contacts from './components/Header/Contacts';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about_us" element={<AboutUs />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
    </div>
  );
}

export default App;

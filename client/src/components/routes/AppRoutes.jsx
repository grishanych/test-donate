import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./cart/Cart";
import Reports from "./Reports";
import Blog from "./Blog";
import Contacts from "./Contacts";
import Home from "./home/Home";
import Categories from "./categories/Categories";
import Donation from "../routes/categories/Donation";
import Clothing from "../routes/categories/Clothing";
import Auction from "../routes/categories/Auction";
import CustomerLogIn from "./adminRoutes/customerLogin/CustomerLogIn";
import AdminLogIn from "./adminRoutes/adminLogin/AdminLogIn";
import AdminPage from "./adminRoutes/adminPage/AdminPage";
import CustomerPage from "./adminRoutes/customerPage/CustomerPage";
import CustomerRegistration from "./adminRoutes/CustomerRegistration";
import AdminRegistration from "./adminRoutes/AdminRegistration";
import Favorites from "./favorites/Favorites";
import DeliveryPayment from "./DeliveryPayment";
import Returns from "./Returns";
import PrivacyPolicy from "./PrivacyPolicy";
import ProductPage from "./ProductPage";
import SearchProducts from "./searchProducts/SearchProducts";


function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/categories/military-clothing" element={<Clothing/>}/>
      <Route path="/categories/charity-auction" element={<Auction/>}/>
      <Route path="/categories/donation" element={<Donation/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/delivery-payment" element={<DeliveryPayment />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/product/:itemNo" element={<ProductPage />} />
      <Route path="/log-in" element={<CustomerLogIn/>}/>
      <Route path="/account" element={<CustomerPage/>}/>
      <Route path="/admin" element={<AdminLogIn/>}/>
      <Route path="/adm-page" element={<AdminPage/>}/>
      <Route path="/registration" element={<CustomerRegistration/>}/>
      <Route path="/adm-registration" element={<AdminRegistration/>}/>
      <Route path="/products-search" element={<SearchProducts/>} />
    </Routes>
  );
}

export default AppRoutes;
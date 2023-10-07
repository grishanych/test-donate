import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Reports from "./Reports";
import Blog from "./Blog";
import Contacts from "./Contacts";
import Home from "./home/Home";
import Categorys from "./categories/Categories";
import CustomerLogIn from "./adminRoutes/customerLogin/CustomerLogIn";
import AdminLogIn from "./adminRoutes/adminLogin/AdminLogIn";
import AdminPage from "./adminRoutes/adminPage/AdminPage";
import CustomerPage from "./adminRoutes/customerPage/CustomerPage";
import CustomerRegistration from "./adminRoutes/CustomerRegistration";
import AdminRegistration from "./adminRoutes/AdminRegistration";


function AppRoutes() {

  return (
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
  );
}

export default AppRoutes;
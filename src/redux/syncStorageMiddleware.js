// export const syncStorageMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   if (["ADD_TO_CART", "REMOVE_FROM_CART",
// "ADD_FAVORITES", "REMOVE_FROM_FAVORITES"].includes(action.type)) {
//     localStorage.setItem("Cart", JSON.stringify(store.getState().cart.items));
//     localStorage.setItem("Favorites", JSON.stringify(store.getState().favorites.items));
//   }
//   return result;
// };

import axios from "axios";
import { setAuthToken } from "./actions/authActions";
import { NEW_CART_URL, NEW_FAVORITES_URL } from "../endpoints/endpoints";

export const syncStorageMiddleware = () => (next) => async (action) => {
  const result = next(action);
  const isUserLoggedIn = localStorage.getItem("userLogin");

  if (isUserLoggedIn) {
    if (["ADD_TO_CART", "REMOVE_FROM_CART", "ADD_FAVORITES", "REMOVE_FROM_FAVORITES"].includes(action.type)) {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      try {
        const responseCart = await axios.get(NEW_CART_URL);
        const responseWishlist = await axios.get(NEW_FAVORITES_URL);
        
        if (responseCart.status === 200 && responseCart.data !== null) {
          localStorage.setItem("Cart", JSON.stringify(responseCart.data.products));
        }
        if (responseWishlist.status === 200 && responseWishlist.data !== null) {
          localStorage.setItem("Ffavorites", JSON.stringify(responseWishlist.data.products));
          // localStorage.setItem("Favorites", JSON.stringify(storeAPI.getState().favorites.items));
        }
      } catch (error) {
        console.error("Помилка при оновленні даних з сервера:", error);
      }
    }
  }


  return result;
};



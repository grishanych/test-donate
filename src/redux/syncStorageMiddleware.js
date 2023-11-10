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
import { NEW_CART_URL } from "../endpoints/endpoints";

export const syncStorageMiddleware = (storeAPI) => (next) => async (action) => {
  const result = next(action);
  const isUserLoggedIn = localStorage.getItem("userLogin");

  if (isUserLoggedIn) {
    if (["ADD_TO_CART", "REMOVE_FROM_CART", "ADD_FAVORITES", "REMOVE_FROM_FAVORITES"].includes(action.type)) {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      try {
        const response = await axios.get(NEW_CART_URL);
        
        if (response.status === 200 && response.data !== null) {
          console.log(response.data);
          console.log(response);
          localStorage.setItem("Cart", JSON.stringify(response.data.products));
          localStorage.setItem("Favorites", JSON.stringify(storeAPI.getState().favorites.items));
        }
      } catch (error) {
        console.error("Помилка при оновленні даних з сервера:", error);
      }
    }
  }


  return result;
};



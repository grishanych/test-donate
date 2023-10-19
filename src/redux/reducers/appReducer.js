import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import { cartReducer, favoritesReducer } from "./cartReducer";
import { productReducer, productsReducer } from "./productReducer";
import inputReducer from "./inputReducer";

const appReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  product: productReducer,
  products: productsReducer,
  inputValue: inputReducer,
});

export default appReducer;

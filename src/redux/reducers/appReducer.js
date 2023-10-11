import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import {cartReducer,  favoritesReducer } from "./cartReducer";
import productReducer from "./productReducer";
import inputReducer from "./inputReducer";

const appReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
    product: productReducer,
    inputValue: inputReducer,
});

export default appReducer;
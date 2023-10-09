import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import {cartReducer,  favoritesReducer } from "./cartReducer";
import productReducer from "./productReducer";

const appReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
    product: productReducer
});

export default appReducer;
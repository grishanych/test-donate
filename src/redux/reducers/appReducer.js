import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import {cartReducer,  favoritesReducer } from "./cartReducer";

const appReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer
});

export default appReducer;
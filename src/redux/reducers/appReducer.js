import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const appReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
});

export default appReducer;
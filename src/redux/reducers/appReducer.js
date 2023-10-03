import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const appReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    // це обєкт який приймає в себе ключ із функцією 
});

export default appReducer;
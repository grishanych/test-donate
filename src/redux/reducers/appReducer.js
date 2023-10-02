import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const appReducer = combineReducers({
    counter: counterReducer,
    // це обєкт який приймає в себе ключ із функцією 
});

export default appReducer;
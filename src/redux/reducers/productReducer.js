// productReducer.js
import { SET_PRODUCT } from "../actions/productActions";

const initialState = {
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

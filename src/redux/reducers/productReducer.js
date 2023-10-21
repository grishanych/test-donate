import { SET_PRODUCT,
  // SET_PRODUCTS
} from "../actions/productActions";

const initialState = {
  product: null,
};

// const initialStateProducts = {
//   products: {
//     items: [],
//   },
// };

export const productReducer = (state = initialState, action) => {
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

// export const productsReducer = (state = initialStateProducts.products, action) => {
//   switch (action.type) {
//     case SET_PRODUCTS:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     default:
//       return state;
//   }
// };
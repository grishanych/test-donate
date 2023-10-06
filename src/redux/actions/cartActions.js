export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const SET_ITEM_COUNT = 'SET_ITEM_COUNT';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });


export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const setCartItems = (cartItems) => ({
  type: SET_CART_ITEMS,
  payload: cartItems,
});

export const setItemCount = (itemCount) => ({
  type: SET_ITEM_COUNT,
  payload: itemCount,
});
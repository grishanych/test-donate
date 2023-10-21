export const syncStorageMiddleware = store => next => action => {
  let result = next(action);
  if (["ADD_TO_CART", "REMOVE_FROM_CART", "ADD_FAVORITES", "REMOVE_FROM_FAVORITES"].includes(action.type)) {
    localStorage.setItem("Cart", JSON.stringify(store.getState().cart.items));
    localStorage.setItem("Favorites", JSON.stringify(store.getState().favorites.items));
  }
  return result;
};

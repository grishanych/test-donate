import axios from "axios";
import store from "../redux/store";
import { setAuthToken } from "../redux/actions/authActions";
import { NEW_CART_URL } from "../endpoints/endpoints";


// const selectCartForApi = (state) => state.cart.items.map((item) => ({
//   // eslint-disable-next-line no-underscore-dangle
//   product: item._id,
//   cartQuantity: item.quantity,
// }));

// export default function sendCart() {
//   const { token } = store.getState().auth;
//   store.dispatch(setAuthToken(token));

//   const state = store.getState();

//   const newCart = {
//     products: selectCartForApi(state),
//   };

//   axios
//     .post(NEW_CART_URL, newCart)
//     // .then((response) => {
//     //   console.log(response);
//     // })
//     .then(null)
//     .catch((err) => {
//       console.log(err);
//     });
// }

export default function sendCart(cartItems) {
  const { token } = store.getState().auth;
  // Тут не потрібно викликати setAuthToken, якщо токен вже встановлений
  // у заголовки axios через інтерсептори
  store.dispatch(setAuthToken(token));

  const newCart = {
    products: cartItems.map((item) => ({
    // eslint-disable-next-line no-underscore-dangle
      product: item._id,
      cartQuantity: item.quantity,
    })),
  };

  return axios.post(NEW_CART_URL, newCart);
  //   , {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
}

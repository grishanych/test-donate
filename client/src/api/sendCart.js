import axios from "axios";
import store from "../redux/store";
import { setAuthToken } from '../redux/actions/authActions';


const selectCartForApi = state => state.cart.items.map(item => ({
  product: item.id,
  cartQuantity: item.quantity,
}));

export default function sendCart() {
  const { token } = store.getState().auth;
  store.dispatch(setAuthToken(token));

  const state = store.getState();

  const newCart = {
    products: selectCartForApi(state),
  };

  axios
    .post("http://localhost:4000/api/cart", newCart)
    .then(newCart => {
      console.log(newCart);
    })
    .catch(err => {
      console.log(err);
    });
}
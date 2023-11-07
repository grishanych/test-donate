import axios from "axios";
import { setAuthToken } from "../redux/actions/authActions";
import { logIn } from "../redux/actions/loggedInActions";
import { setError } from "../redux/actions/errorActions";
import { LOGIN_URL, GET_FAVORITES } from "../endpoints/endpoints";
import { setLoggedInUser } from "../redux/actions/userActions";
// import { addToCart, updateCart } from "../redux/actions/cartActions";
import { initializeCart } from "../redux/actions/cartActions";
// import { getProducts } from ""
import sendCart from "./sendCart";
import getCart from "./getCart";
import updateCart from "./updateCart";


async function getFavoritesFromServer() {
  try {
    const response = await axios.get(GET_FAVORITES);
    localStorage.setItem("isAdmin", `${response.data.isAdmin}`);
    return response.data.isAdmin;
  } catch (err) {
    console.error("Помилка при отриманні даних:", err);
    return null;
  }
}


const logInUser = (login, password) => async (dispatch) => {
  try {
    const userData = { loginOrEmail: login, password };
    const loginResult = await axios.post(LOGIN_URL, userData);

    if (loginResult.data.success) {
      const { token } = loginResult.data;
      dispatch(setLoggedInUser(login));
      localStorage.setItem("userLogin", login);
      localStorage.setItem("token", token);
      dispatch(setAuthToken(token));
      getFavoritesFromServer();
      dispatch(logIn());

      const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
      const serverCart = await getCart();
      console.log(cartItems);
      
      // !
      if (serverCart.data.products.length > 0) {
        const serverCartItems = serverCart.data.products.map((product) => ({
          quantity: product.product.cartQuantity,
          // eslint-disable-next-line no-underscore-dangle
          _id: product.product._id,
        }));
        console.log(serverCartItems);
        // const updatedCartItems = [...cartItems, ...serverCartItems];
        // console.log(updatedCartItems);
        // localStorage.setItem("Cart", JSON.stringify(updatedCartItems));
        // localStorage.setItem("Cart", JSON.stringify(serverCart.data.products));
      }
      
      if (serverCart.data.products > 0) {
        // Кошик на сервері існує, потрібно оновити його
        console.log(cartItems);
        console.log(serverCart.data.products);
        await updateCart([...serverCart.data.products, ...cartItems]);
      } else if (serverCart.data.products === 0 && cartItems.length > 0) {
        // Кошика на сервері немає, потрібно створити новий
        await sendCart(cartItems);
      }

      // Оновлюємо Redux store новими даними кошика з сервера
      const prod = [];
      serverCart.data.products.forEach((item) => prod.push(item.product));
      // товар для store
      // dispatch(initializeCart(...prod));
      dispatch(initializeCart(...prod));
    }
  } catch (error) {
    if (error.response && error.response.data.loginOrEmail === "Customer not found") {
      dispatch(setError(true));
    } else {
      console.error("Помилка авторизації:", error);
    }
  }
};

export default logInUser;

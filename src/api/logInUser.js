import axios from "axios";
import { setAuthToken } from "../redux/actions/authActions";
import { logIn } from "../redux/actions/loggedInActions";
import { setError } from "../redux/actions/errorActions";
import { LOGIN_URL, GET_FAVORITES } from "../endpoints/endpoints";
import { setLoggedInUser } from "../redux/actions/userActions";

const logInUser = (login, password) => (dispatch) => {
  const userData = {
    loginOrEmail: login,
    password,
  };

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


  return axios
    .post(LOGIN_URL, userData)
    .then((loginResult) => {
      if (loginResult.data.success === true) {
        dispatch(setLoggedInUser(login));
        
        
        localStorage.setItem("userLogin", login);
        localStorage.setItem("token", loginResult.data.token);
        dispatch(setAuthToken(loginResult.data.token));
        getFavoritesFromServer();
        dispatch(logIn());
      }
    })
    .catch((err) => {
      if (err.response.data.loginOrEmail === "Customer not found") {
        dispatch(setError(true));
      }
      return Promise.reject(err);
    });
};

export default logInUser;

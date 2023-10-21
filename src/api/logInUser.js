import axios from "axios";
// import { setToken } from "../redux/actions/tokenActions";
import { setAuthToken } from "../redux/actions/authActions";
import { logIn } from "../redux/actions/loggedInActions";
import { setError } from "../redux/actions/errorActions";
import { LOGIN_URL } from "../endpoints/endpoints"

const logInUser = (login, password) => dispatch => {
  const userData = {
    loginOrEmail: login,
    password: password
  };

  return axios
    .post(LOGIN_URL, userData)
    .then(loginResult => {
      if (loginResult.data.success === true) {
        localStorage.setItem('token', loginResult.data.token);
        // dispatch(setToken(loginResult.data.token));
        dispatch(setAuthToken(loginResult.data.token));
        dispatch(logIn());
      }
    })
    .catch(err => {
      if (err.response.data.loginOrEmail === "Customer not found") {
        dispatch(setError(true));
      }
      return Promise.reject(err);
    });
};

export default logInUser;
// import axios from "axios";
// import { GET_CUSTOMER } from "../endpoints/endpoints";

// export const getFavorites = async (config) => {
//   const response = await axios.get(GET_CUSTOMER, config);
//   return response.data;
// };

import axios from "axios";
import store from "../redux/store";
import { setAuthToken } from "../redux/actions/authActions";
import { NEW_FAVORITES_URL } from "../endpoints/endpoints";


export default function getFavorites() {
  const { token } = store.getState().auth;
  store.dispatch(setAuthToken(token));

  return axios.get(NEW_FAVORITES_URL)
    .then((response) => response)
    .catch((error) => {
      console.error("Помилка при отриманні кошика:", error);
      throw error;
    });
}

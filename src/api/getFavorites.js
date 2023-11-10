import axios from "axios";
import { GET_CUSTOMER } from "../endpoints/endpoints";

export const getFavorites = async (config) => {
  const response = await axios.get(GET_CUSTOMER, config);
  return response.data;
};

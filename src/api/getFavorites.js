import axios from "axios";
import { GET_FAVORITES } from "../endpoints/endpoints";

export const getFavorites = async (config) => {
  const response = await axios.get(GET_FAVORITES, config);
  return response.data;
};

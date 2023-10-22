import axios from "axios";
import { GET_PRODUCTS_URL } from "../endpoints/endpoints";


export const getProducts = () => axios.get(GET_PRODUCTS_URL)
  .then((response) => response.data);

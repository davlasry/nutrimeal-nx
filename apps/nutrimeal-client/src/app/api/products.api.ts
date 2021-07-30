import axios from 'axios';
import { API_BASE_URL } from './config';

export const fetchProducts = async () => {
  try {
    const productsResponse = await axios.get(`${API_BASE_URL}/products`);
    return productsResponse.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const apiUrl = import.meta.env.VITE_HOST;
import axios from "axios";

export const getProductByCode = async (code) => {
  try {
    const response = await axios.post(`${apiUrl}/api/products/code`, { code });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return { error: error.message };
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.post(`${apiUrl}/api/products`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return { error: error.message };
  }
};

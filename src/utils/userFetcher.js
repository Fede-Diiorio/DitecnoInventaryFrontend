const apiUrl = import.meta.env.VITE_HOST;
import axios from "axios";

export const authUserByCode = async (code) => {
  try {
    const response = await axios.post(`${apiUrl}/api/users/code`, { code });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    return { error: error.message };
  }
};

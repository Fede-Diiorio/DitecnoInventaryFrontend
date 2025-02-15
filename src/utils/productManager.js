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

export const descountStock = async (products) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios.post(
      `${apiUrl}/api/products/descount`,
      { products },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error obteniendo producto:",
      error.response?.data || error.message
    );
    return { error: error.message };
  }
};

export const addProductByCode = async (query, setProducts) => {
  try {
    const productData = await getProductByCode(query);

    if (!productData.id) {
      return productData.error;
    }

    const productPayload = {
      id: productData.id,
      name: productData.product_name,
      code: productData.product_code,
      quantity: 1,
    };

    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (prod) => prod.code === productPayload.code
      );

      if (existingProduct) {
        // Si el producto existe, creamos un nuevo array con la cantidad actualizada
        return prevProducts.map((prod) =>
          prod.code === productPayload.code
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      } else {
        // Si el producto no existe, lo agregamos al array
        return [...prevProducts, productPayload];
      }
    });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
  }
};

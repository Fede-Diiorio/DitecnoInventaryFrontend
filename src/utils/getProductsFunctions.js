const apiUrl = import.meta.env.VITE_HOST;

export const getProductByCode = async (code) => {
  try {
    const response = await fetch(`${apiUrl}/api/products/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error("Error al obtener el producto");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return { error: error.message };
  }
};

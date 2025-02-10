import React, { useState } from "react";
import { getProductByCode } from "../../utils/getProductByCode";

const TestBar = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newId = inputValue.trim();
      setInputValue("");

      const data = await getProductByCode(newId);

      if (!data.error) {
        setProducts([...products, data]); // Agregar el nuevo producto al array
      } else {
        console.error("Error en la API:", data.error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="box"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Producto</button>
      </form>
      <div>
        <h2>Productos ingresados:</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {product.product_name} <br />
              <strong>Código:</strong> {product.product_code} <br />
              <strong>Stock:</strong> {product.product_stock}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestBar;

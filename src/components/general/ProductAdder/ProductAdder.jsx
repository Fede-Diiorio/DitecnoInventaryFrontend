import React, { useState } from "react";
import classes from "./ProductAdder.module.scss";
import { FaSistrix } from "react-icons/fa6";
import { getProductByCode } from "../../../utils/productFetcher";

const ProductAdder = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]); // Estado para almacenar múltiples productos

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Evita búsquedas vacías

    try {
      const productData = await getProductByCode(query);
      setProducts((prevProducts) => [...prevProducts, productData]); // Agregar producto al array
      setQuery(""); // Vaciar el input después de la búsqueda
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Ingresar código..."
          value={query}
          onChange={handleInputChange}
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          <FaSistrix className={classes.logo} />
        </button>
      </div>

      {/* Mostrar la lista de productos */}
      <div className={classes.productList}>
        {products.map((product, index) => (
          <div key={index} className={classes.productItem}>
            <h3>{product.product_name}</h3>
            <p>Código: {product.product_code}</p>
            <p>Stock: {product.product_stock}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ProductAdder;

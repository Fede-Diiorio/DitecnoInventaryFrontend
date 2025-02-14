import React, { useState } from "react";
import classes from "./ProductAdder.module.scss";
import { FaSistrix } from "react-icons/fa6";
import { getProductByCode } from "../../../utils/productFetcher";

const ProductAdder = () => {
  const [query, setQuery] = useState("");
  const [productInfo, setProductInfo] = useState(null); // Estado para almacenar la información del producto

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Llamar a getProductByCode con el código ingresado en 'query'
    try {
      const productData = await getProductByCode(query);
      setProductInfo(productData); // Guardar la información del producto en el estado
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
    }
  };

  console.log(productInfo);

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
      {/* Mostrar la información del producto */}
      {productInfo && (
        <div className={classes.productInfo}>
          <h3>{productInfo.product_name}</h3>
          <p>{productInfo.product_code}</p>
          <p>{productInfo.product_stock}</p>
          {/* Otros detalles del producto según la estructura de 'productInfo' */}
        </div>
      )}
    </form>
  );
};

export default ProductAdder;

import React, { useState, useRef, useEffect } from "react";
import classes from "./ProductAdder.module.scss";
import { FaSistrix } from "react-icons/fa6";
import ProductList from "../../body/ProductList/ProductList";
import { addProductByCode, descountStock } from "../../../utils/productManager";

const ProductAdder = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setErrorMessage(""); // Limpiar errores previos antes de la nueva búsqueda

      if (query === "CMD00001") {
        setProducts([]);
      } else if (query === "CMD00002") {
        const response = await descountStock(products);
        setProducts([]);
      } else {
        const error = await addProductByCode(
          query,
          setProducts,
          setErrorMessage
        );
        if (error) setErrorMessage(error); // Si hay error, actualizar el estado
      }

      setQuery("");
      inputRef.current?.focus();
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      setErrorMessage("Hubo un problema al buscar el producto."); // Mensaje genérico de error
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className={classes.container}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ingresar código o comando"
          value={query}
          onChange={handleInputChange}
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          <FaSistrix className={classes.logo} />
        </button>
      </div>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}{" "}
      {/* Mostrar error si existe */}
      <ProductList products={products} />
    </form>
  );
};

export default ProductAdder;

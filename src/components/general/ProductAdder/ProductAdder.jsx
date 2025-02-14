import React, { useState, useRef, useEffect } from "react";
import classes from "./ProductAdder.module.scss";
import { FaSistrix } from "react-icons/fa6";
import ProductList from "../../body/ProductList/ProductList";
import { addProductByCode } from "../../../utils/productManager";

const ProductAdder = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]); // Estado para almacenar múltiples productos
  const inputRef = useRef(null); // Crear la referencia

  useEffect(() => {
    inputRef.current?.focus(); // Enfocar el input cuando el componente se monta
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Evita búsquedas vacías

    try {
      addProductByCode(query, setProducts);
      setQuery(""); // Vaciar el input después de la búsqueda
      inputRef.current?.focus(); // Vuelve a enfocar el input después de la búsqueda
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className={classes.container}>
        <input
          ref={inputRef} // Asignar la referencia al input
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

      <ProductList products={products} />
    </form>
  );
};

export default ProductAdder;

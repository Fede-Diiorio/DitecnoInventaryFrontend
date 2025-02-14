import React, { useState } from "react";
import classes from "./ProductAdder.module.scss";
import { FaSistrix } from "react-icons/fa6";
import { getProductByCode } from "../../../utils/productFetcher";
import ProductList from "../../body/ProductList/ProductList";

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

      <ProductList products={products} />
    </form>
  );
};

export default ProductAdder;

import React, { useState } from "react";
import classes from "./SearchBar.module.scss";
import { FaSistrix } from "react-icons/fa6";
import { commandManager } from "../../../utils/commandManager";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    commandManager(query);
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Previene el recargo de la página
    if (query.trim() !== "") {
      await commandManager(query.trim().toUpperCase()); // Convertimos el comando a mayúsculas
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Ingresar comando..."
          value={query}
          onChange={handleInputChange}
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          <FaSistrix className={classes.logo} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

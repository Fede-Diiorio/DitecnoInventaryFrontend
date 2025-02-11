import React, { useState } from "react";
import classes from "./SearchBar.module.scss";
import { FaSistrix } from "react-icons/fa6";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Ingresar comando..."
        value={query}
        onChange={handleInputChange}
        className={classes.input}
      />
      <button onClick={handleSearch} className={classes.button}>
        <FaSistrix className={classes.logo} />
      </button>
    </div>
  );
};

export default SearchBar;

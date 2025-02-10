import React, { useState } from "react";

const TestBar = () => {
  const [ids, setIds] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setIds([...ids, inputValue.trim()]);
      setInputValue("");
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
        <button type="submit">Agregar ID</button>
      </form>
      <div>
        <h2>IDs ingresados:</h2>
        <ul>
          {ids.map((id, index) => (
            <li key={index}>{id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestBar;

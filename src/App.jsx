import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Header from "./components/header/Header/Header";
import SearchBar from "./components/general/SearchBar/SearchBar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <SearchBar />
      </BrowserRouter>
    </main>
  );
}

export default App;

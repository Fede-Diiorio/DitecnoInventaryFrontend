import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Header from "./components/header/Header/Header";
import SearchBar from "./components/general/SearchBar/SearchBar";
import Login from "./components/body/Login/Login";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        {/* <SearchBar /> */}
        <Login />
      </BrowserRouter>
    </main>
  );
}

export default App;

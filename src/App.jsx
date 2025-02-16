import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header/Header";
import ProductAdder from "./components/general/ProductAdder/ProductAdder";
import Login from "./components/body/Login/Login";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import InventoryList from "./components/body/InventoryList/InventoryList";

function AppContent() {
  const { token } = useContext(AuthContext);
  return token ? <ProductAdder /> : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/inventario" element={<InventoryList />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

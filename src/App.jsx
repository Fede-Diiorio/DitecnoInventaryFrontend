import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header/Header";
import ProductAdder from "./components/general/ProductAdder/ProductAdder";
import Login from "./components/body/Login/Login";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function AppContent() {
  const { token } = useContext(AuthContext);
  return token ? <ProductAdder /> : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header/Header";
import SearchBar from "./components/general/SearchBar/SearchBar";
import Login from "./components/body/Login/Login";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function AppContent() {
  const { token } = useContext(AuthContext);
  return token ? <SearchBar /> : <Login />;
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

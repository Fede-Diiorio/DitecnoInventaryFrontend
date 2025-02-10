import "./App.css";
import { BrowserRouter } from "react-router-dom";
import TestBar from "./components/TestBar/TestBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <TestBar />
      </BrowserRouter>
    </>
  );
}

export default App;

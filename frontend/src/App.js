import "./App.css";
import Calendar from "./components/Calendar";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

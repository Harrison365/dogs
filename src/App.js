import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [dogOrHome, setDogOrHome] = useState("Dog");
  return (
    <div className="App">
      <Navbar dogOrHome={dogOrHome} setDogOrHome={setDogOrHome} />
      <Routes>
        <Route path="/" element={<h2>{dogOrHome}</h2>} />
        <Route path="/user" element={<h2>User Area</h2>} />
      </Routes>
    </div>
  );
}
export default App;

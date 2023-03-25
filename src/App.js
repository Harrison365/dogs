import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
function App() {
  const [dogOrHome, setDogOrHome] = useState("Dog");
  return (
    <div className="App">
      <Navbar dogOrHome={dogOrHome} setDogOrHome={setDogOrHome} />
      <h2>{dogOrHome}</h2>
    </div>
  );
}
export default App;

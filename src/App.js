import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import { Context } from "./context/context";

function App() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  return (
    // To add variables inside to the context
    <Context.Provider value={{ isVideoPlayed, setIsVideoPlayed }}>
      <Navbar />
      <Carousel />
    </Context.Provider>
  );
}

export default App;

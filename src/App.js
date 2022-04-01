import { useState } from "react";
import "./App.css";
import { Context } from "./context/context";
import RoutesComponent from "./route/RoutesComponent";

function App() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [cardSelectedList, setCardSelectedList] = useState([]);

  return (
    // To add variables inside to the context
    <Context.Provider
      value={{
        isVideoPlayed,
        setIsVideoPlayed,
        cardSelectedList,
        setCardSelectedList,
      }}
    >
      <RoutesComponent />
    </Context.Provider>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Context } from "./context/context";
import RoutesComponent from "./route/RoutesComponent";

function App() {
  const [data, setData] = useState([]);
  const [cardSelected, setCardSelected] = useState({});
  const [watchedList, setWatchedList] = useState([]);

  return (
    // To add variables inside to the context
    <Context.Provider
      value={{
        data,
        setData,
        cardSelected,
        setCardSelected,
        watchedList,
        setWatchedList,
      }}
    >
      <RoutesComponent />
    </Context.Provider>
  );
}

export default App;

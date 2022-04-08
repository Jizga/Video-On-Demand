import React, { createContext, useState } from "react";

const Context = createContext();
const CarouselContext = createContext();

const AppContextProvider = ({ children }) => {
  // To add variables inside to the different contexts
  const [data, setData] = useState([]);
  const [cardSelected, setCardSelected] = useState({});
  const [watchedList, setWatchedList] = useState([]);

  return (
    <Context.Provider value={{ data, setData, watchedList, setWatchedList }}>
      <CarouselContext.Provider value={{ cardSelected, setCardSelected }}>
        {children}
      </CarouselContext.Provider>
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

const useCarouselContext = () => {
  const context = React.useContext(CarouselContext);
  if (context === undefined) {
    throw new Error(
      "useCarouselContext must be used within a AppContextProvider"
    );
  }
  return context;
};

export { AppContextProvider, useAppContext, useCarouselContext };

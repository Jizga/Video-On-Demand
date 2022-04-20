import React, { createContext, useState } from "react";

const CarouselContext = createContext();

const CarouselProvider = ({ children }) => {
  // To add variables inside to the different contexts
  const [cardSelected, setCardSelected] = useState({});

  return (
    <CarouselContext.Provider value={{ cardSelected, setCardSelected }}>
      {children}
    </CarouselContext.Provider>
  );
};

const useCarouselContext = () => {
  const context = React.useContext(CarouselContext);
  if (context === undefined) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }
  return context;
};

export { CarouselProvider, useCarouselContext };

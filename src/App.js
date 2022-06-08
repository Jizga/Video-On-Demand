import React from 'react'
import { CarouselProvider } from "./context/CarouselContext";
import { AppContextProvider } from "./context/context";
import RoutesComponent from "./route/RoutesComponent";

function App() {
  return (
    <AppContextProvider>
      <CarouselProvider>
        <RoutesComponent />
      </CarouselProvider>
    </AppContextProvider>
  );
}

export default App;

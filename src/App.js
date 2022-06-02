import { CarouselProvider } from "./context/CarouselContext";
import { AppContextProvider } from "./context/Context";
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

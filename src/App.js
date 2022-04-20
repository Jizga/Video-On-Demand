import "./App.scss";
import { CarouselProvider } from "./Context/CarouselContext";
import { AppContextProvider } from "./Context/Context";
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

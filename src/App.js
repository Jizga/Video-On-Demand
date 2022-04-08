import "./App.scss";
import { AppContextProvider } from "./context/context";
import RoutesComponent from "./route/RoutesComponent";

function App() {
  return (
    <AppContextProvider>
      <RoutesComponent />
    </AppContextProvider>
  );
}

export default App;

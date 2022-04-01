import { Route, Routes } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import History from "../components/History/History";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../components/NotFound/NotFound";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Carousel />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

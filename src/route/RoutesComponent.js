import { Route, Routes } from "react-router-dom";
import History from "../views/History/History";
import Home from "../views/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../components/NotFound/NotFound";
import Player from "../components/Player/Player";
import Video from "../views/Video/Video";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="video" element={<Video />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an video in the Home page</p>
              </main>
            }
          />
          <Route path=":videoId" element={<Player />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

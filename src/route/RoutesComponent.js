import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "../views/History/History";
import Home from "../views/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../components/NotFound/NotFound";
import Video from "../views/Video/Video";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="video/:videoId" element={<Video />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

import React, { useContext } from "react";
import { Context } from "../../context/context";
import Carousel from "../../components/Carousel/Carousel";

export default function History() {
  const { watchedList } = useContext(Context);
  return <div>
    <Carousel />
  </div>;
}

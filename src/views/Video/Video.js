import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Player from "../../components/Player/Player";
import { Context } from "../../context/context";

export default function Video() {
  const { cardSelected } = useContext(Context);
  const { mediaUrl, image } = cardSelected;

  return (
    <>
      <Player video={mediaUrl} image={image} />
      <Outlet />
    </>
  );
}

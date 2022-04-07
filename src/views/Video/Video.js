import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Player from "../../components/Player/Player";
import { Context } from "../../context/context";
import styles from "./Video.module.scss";

export default function Video() {
  const { cardSelected } = useContext(Context);
  const { mediaUrl, image } = cardSelected;

  return (
    <div className={styles.container}>
      <Player video={mediaUrl} image={image} />
      <Outlet />
    </div>
  );
}

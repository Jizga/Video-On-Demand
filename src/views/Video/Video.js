import React from "react";
import Player from "../../components/Player/Player";
import { useCarouselContext } from "../../context/context";
import styles from "./Video.module.scss";

export default function Video() {
  const { cardSelected } = useCarouselContext();
  const { mediaUrl, image } = cardSelected;

  return (
    <div className={styles.container}>
      <div>
        <Player video={mediaUrl} image={image} />
      </div>
    </div>
  );
}

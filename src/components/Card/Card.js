import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Video from "../Video/Video";

export default function Card({ element }) {
  const { id, name, image, mediaUrl, summary } = element;
  const [showDescription, setShowDescription] = useState(false);
  const [isPlayed, setisPlayed] = useState(false);

  const playVide = () => {
    setisPlayed(true);
  };

  return (
    <div className={styles.card} onClick={() => playVide()}>
      {isPlayed ? (
        <Video video={mediaUrl} image={image} />
      ) : (
        <>
          <div
            className={styles.imageContainer}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
          >
            {showDescription ? (
              <div className={styles.description}>
                <span>{summary}</span>
              </div>
            ) : (
              <img src={image} alt={name} />
            )}
          </div>
          <h3 className={styles.truncate}>{name}</h3>
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
};

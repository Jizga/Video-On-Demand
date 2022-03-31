import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ element, playVideo }) {
  const { name, image, summary } = element;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.card} onClick={playVideo}>
      <div
        className={styles.imageContainer}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {showDescription ? (
          // Show the video description
          <div className={styles.description}>
            <span>{summary}</span>
          </div>
        ) : (
          // Show the video image
          <img src={image} alt={name} />
        )}
      </div>
      <h3 className={styles.truncate}>{name}</h3>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
  playVideo: PropTypes.func,
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import classNames from "classnames";
export default function Card({ element, playVideo, selected }) {
  const { name, image, summary } = element;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={classNames(styles.card, { [styles.focused]: selected })}
      onClick={() => playVideo(element)}
    >
      <div
        className={classNames(styles.imageContainer, {
          [styles.imageContainerActive]: showDescription,
        })}
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
      <h3
        className={classNames(styles.truncate, {
          [styles.focusedTitle]: selected,
        })}
      >
        {name}
      </h3>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
  playVideo: PropTypes.func,
  selected: PropTypes.bool,
};

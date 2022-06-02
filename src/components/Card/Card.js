import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { useAppContext } from "../../context/Context";
export default function Card({ element, playVideo, selected }) {
  const { name, image, summary } = element;
  const [showDescription, setShowDescription] = useState(false);
  const { isLightTheme } = useAppContext();

  return (
    <div
      className={classNames(styles.card, {
        [styles.focusedDark]: selected && !isLightTheme,
        [styles.focusedLight]: selected && isLightTheme,
      })}
      onClick={() => playVideo(element)}
    >
      <div
        className={classNames({
          [styles.imageContainerDark]: showDescription && !isLightTheme,
          [styles.imageContainerLight]: showDescription && isLightTheme,
          [styles.imageContainerActiveDark]: showDescription && !isLightTheme,
          [styles.imageContainerActiveLight]: showDescription && isLightTheme,
        })}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {showDescription ? (
          // Show the video description
          <div
            className={classNames({
              [styles.descriptionDark]: !isLightTheme,
              [styles.descriptionLight]: isLightTheme,
            })}
          >
            <span>{summary}</span>
          </div>
        ) : (
          // Show the video image
          <img src={image} alt={name} />
        )}
      </div>
      <h3
        className={classNames(styles.truncate, {
          [styles.focusedDarkTitle]: selected && !isLightTheme,
          [styles.focusedLightTitle]: selected && isLightTheme,
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

import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
import UseEvent from "../../hooks/UseEvent";

export default function Card({ element, selected }) {
  const { id, name, image, summary } = element;
  const [showDescription, setShowDescription] = useState(false);
  const { setCardSelected, setWatchedList, watchedList } = useContext(Context);
  const [isFocused, setIsFocused] = useState(false);

  let navigate = useNavigate();

  const playVideo = (card) => {
    setCardSelected(card);
    notRepeatVideoWatched(card);
    // To go at the Player component
    navigate(`/video/${id}`);
  };

  const notRepeatVideoWatched = (video) => {
    const watchedIds = [];
    watchedList.map((watched) => watchedIds.push(watched.id));

    if (!watchedIds.includes(video.id)) {
      setWatchedList((oldvideo) => [video, ...oldvideo]);
    }
  };

  const playVideoWhenPressingEnter = ({ key }) => {
    if (key === "Enter") {
      playVideo(element);
    }
  };

  UseEvent("keydown", playVideoWhenPressingEnter);

  useEffect(() => {
    if (selected()) {
      setIsFocused(true);
    }
  }, []);

  return (
    <div
      className={isFocused ? styles.focused : styles.card}
      onClick={() => playVideo(element)}
    >
      <div
        className={
          showDescription ? styles.imageContainerActive : styles.imageContainer
        }
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
      <h3 className={isFocused ? styles.focusedTitle : styles.truncate}>
        {name}
      </h3>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
  selected: PropTypes.func,
};

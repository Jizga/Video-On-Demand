import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Card({ element }) {
  const { id, name, image, summary } = element;
  const [showDescription, setShowDescription] = useState(false);
  const { setCardSelected, setWatchedList, watchedList } = useContext(Context);

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
      setWatchedList((oldvideo) => [...oldvideo, video]);
    }
  };

  return (
    <div className={styles.card} onClick={() => playVideo(element)}>
      <div
        className={showDescription ? styles.imageContainerActive : styles.imageContainer}
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
};

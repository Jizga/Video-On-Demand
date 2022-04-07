import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import UseEvent from "../../hooks/UseEvent";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import styles from "./Carousel.module.scss";
export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);
  const { cardSelected, setCardSelected, setWatchedList, watchedList } =
    useContext(Context);
  const navigate = useNavigate();

  const cardRef = useRef(null);

  const playVideo = (card) => {
    console.log("card en PLAY VIDEO : ", card);

    setCardSelected(card)

    console.log("cardSelected en PLAY VIDEO : ", cardSelected);

    notRepeatVideoWatched(card);
    // To go at the Player component
    navigate(`/video/${card.id}`);
  };

  const notRepeatVideoWatched = (video) => {
    const watchedIds = [];
    watchedList.map((watched) => watchedIds.push(watched.id));

    if (!watchedIds.includes(video.id)) {
      setWatchedList((oldvideo) => [video, ...oldvideo]);
    }
  };

  const isElementSelected = (elemtIndex, cardIdx) => {
    let isSelected = false;
    if (elemtIndex === cardIdx) {
      isSelected = true;
    } else {
      isSelected = false;
    }
    return isSelected;
  };

  const handler = ({ key }) => {
    if (key === "ArrowRight" && cardIndx < data.length) {
      setcardIndx(cardIndx + 1);
    } else if (key === "ArrowLeft" && cardIndx > 0) {
      setcardIndx(cardIndx - 1);
    } else if (key === "Enter") {
      data?.forEach((dataElement, index) => {
        if (index === cardIndx) {
          // playVideo(dataElement);
          const cardSelectRef = cardRef.current;
          cardSelectRef.children[cardIndx].click()

        }
      });
    }
  };

  UseEvent("keydown", handler);

  // useEffect(() => {
  //   data?.forEach((dataElement, index) => {
  //     if (index === cardIndx) {
  //       setCardSelected(dataElement);
  //     }
  //   });
  // }, [cardIndx, data]);

  return (
    <div className={styles.carousel} ref={cardRef}>
      {data.length
        ? data.map((dataElement, indx) => (
            <Card
              key={dataElement.id}
              element={dataElement}
              playVideo={playVideo}
              selected={isElementSelected(indx, cardIndx)}
            />
          ))
        : "Loading..."}
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

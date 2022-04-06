import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import UseEvent from "../../hooks/UseEvent";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);
  const { cardSelected, setCardSelected, setWatchedList, watchedList } =
    useContext(Context);
  let navigate = useNavigate();

  const playVideo = (card) => {
    setCardSelected(card);
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
      console.log("cardSelected al presionar ENTER --- ", cardSelected);
      playVideo(cardSelected);
    }
    return cardIndx;
  };

  UseEvent("keydown", handler);

  useEffect(() => {
    data?.forEach((dataElement, index) => {
      if (index === cardIndx) {
        setCardSelected(dataElement);
      }
    });
  }, [cardIndx, data]);

  return (
    <div className={styles.carousel}>
      {data.length
        ? data.map((dataElement, indx) => (
            <Card
              key={dataElement.id}
              element={dataElement}
              playVideo={playVideo}
              selected={() => isElementSelected(indx, cardIndx)}
              cardIndx={cardIndx}
            />
          ))
        : "Loading..."}
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

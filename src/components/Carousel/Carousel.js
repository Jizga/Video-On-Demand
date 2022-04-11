import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import UseEvent from "../../hooks/UseEvent";
import { useNavigate } from "react-router-dom";
import styles from "./Carousel.module.scss";
import { useAppContext, useCarouselContext } from "../../context/context";

const CARD_WIDTH = 210;
const CARD_WHITE_SPACE = 8;
export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);
  const { setWatchedList, watchedList } = useAppContext();
  const { cardSelected, setCardSelected } = useCarouselContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [carouselElemnts, setCarouselElemnts] = useState([]);

  const navigate = useNavigate();
  const cardRef = useRef(null);

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
      setcardIndx((prev) => prev + 1);
    } else if (key === "ArrowLeft" && cardIndx > 0) {
      setcardIndx((prev) => prev - 1);
    } else if (key === "Enter") {
      // It does not work well
      data?.forEach((dataElement, index) => {
        if (index === cardIndx) {
          // To active the card selected's play function
          const cardSelectRef = cardRef.current;
          cardSelectRef.children[cardIndx].click();
        }
      });
    }
  };

  UseEvent("keydown", handler);

  useEffect(() => {
    // To keep the card focused after playing its video
    data?.forEach((dataElement, index) => {
      if (dataElement.id === cardSelected.id) {
        setcardIndx(index);
      }
    });
  }, [cardSelected]);

  useEffect(() => {
    // Cards number inside the carousel is adapting to the width of the screen
    const cardElementsNumber = Math.trunc(
      screenWidth / (CARD_WIDTH + CARD_WHITE_SPACE)
    );
    const elements = data.slice(0, cardElementsNumber);
    setCarouselElemnts(elements);
  }, [screenWidth]);

  return (
    <div className={styles.carousel} ref={cardRef}>
      {carouselElemnts.length
        ? carouselElemnts.map((dataElement, indx) => (
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

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import UseEvent from "../../hooks/UseEvent";
import { useNavigate } from "react-router-dom";
import styles from "./Carousel.module.scss";
import { useAppContext } from "../../Context/Context";
import { useCarouselContext } from "../../Context/CarouselContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import UseTheme from "../../hooks/UseTheme";
import classNames from "classnames";

const CARD_WIDTH = 210;
const CARD_WHITE_SPACE = 8;
export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);
  const { setWatchedList, watchedList, isLightTheme } = useAppContext();
  const { cardSelected, setCardSelected } = useCarouselContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardElementsNumber, setcardElementsNumber] = useState(0);
  const [carouselElemnts, setCarouselElemnts] = useState([]);
  const [arrowClick, setarrowClick] = useState(0);

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

  const keyboard = ({ key }) => {
    if (key === "ArrowRight") {
      setcardIndx((prev) => {
        if (prev < data.length) {
          return prev + 1;
        } else {
          return prev;
        }
      });
      if (cardIndx === carouselElemnts.length - 1) {
        // Change the card focused
        setcardIndx(carouselElemnts.length - 2);
        next();
      }
    } else if (key === "ArrowLeft") {
      setcardIndx((prev) => {
        if (prev) {
          return prev - 1;
        } else {
          return prev;
        }
      });
      previous();
    } else if (key === "Enter") {
      // It does not work well
      carouselElemnts?.forEach((dataElement, index) => {
        if (index === cardIndx) {
          // To active the card selected's play function
          const cardSelectRef = cardRef.current;
          cardSelectRef.children[cardIndx].click();
        }
      });
    }
  };

  UseEvent("keydown", keyboard);

  const previous = () => {
    if (arrowClick >= 1) {
      carouselElemnts.unshift(data[arrowClick - 1]);
      carouselElemnts.pop();
      setCarouselElemnts(carouselElemnts);
      setarrowClick((p) => p - 1);
    }
  };

  const next = () => {
    if (data[cardElementsNumber + arrowClick]) {
      carouselElemnts.shift();
      carouselElemnts.push(data[cardElementsNumber + arrowClick]);
      setCarouselElemnts(carouselElemnts);
      setarrowClick((p) => p + 1);
    }
  };

  useEffect(() => {
    // To keep the card focused after playing its video
    data?.forEach((dataElement, index) => {
      if (dataElement.id === cardSelected.id) {
        setcardIndx(index);
      }
    });
  }, [cardSelected, data]);

  useEffect(() => {
    // Cards number inside the carousel is adapting to the width of the screen
    setcardElementsNumber(
      Math.trunc(screenWidth / (CARD_WIDTH + CARD_WHITE_SPACE))
    );
    const elements = data.slice(0, cardElementsNumber);
    setCarouselElemnts(elements);
  }, [screenWidth, cardElementsNumber, data]);

  useEffect(() => {
    // Listen window resize event
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    // Stop listening when component is unmounted
    return () => {
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={solid("circle-chevron-left")}
        className={classNames(styles.card, {
          [styles["arrow-left-dark"]]: !isLightTheme,
          [styles["arrow-left-ligth"]]: isLightTheme,
        })}
        onClick={() => previous()}
      />
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
      <FontAwesomeIcon
        icon={solid("circle-chevron-right")}
        className={classNames(styles.card, {
          [styles["arrow-right-dark"]]: !isLightTheme,
          [styles["arrow-right-ligth"]]: isLightTheme,
        })}
        onClick={() => next()}
      />
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

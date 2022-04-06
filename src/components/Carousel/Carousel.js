import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import UseEvent from "../../hooks/UseEvent";

export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);

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
    }
  };

  UseEvent("keydown", handler);

  return (
    <div className={styles.carousel}>
      {data.length
        ? data.map((dataElement, indx) => (
            <Card
              key={dataElement.id}
              element={dataElement}
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

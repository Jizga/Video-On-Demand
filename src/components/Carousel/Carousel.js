import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";

export default function Carousel({ data }) {
  const [cardIndx, setcardIndx] = useState(0);

  const isElementSelected = (cardSelectedIndx, idx) => {
    let isSelected = false;
    if (cardSelectedIndx === idx) {
      isSelected = true;
    } else {
      isSelected = false;
    }
    return isSelected;
  };

  return (
    <div className={styles.carousel}>
      {data.length
        ? data.map((dataElement, indx) => (
            <Card
              key={dataElement.id}
              element={dataElement}
              selected={() => isElementSelected(indx, cardIndx)}
            />
          ))
        : "Loading..."}
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

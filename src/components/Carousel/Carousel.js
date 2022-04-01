import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";

export default function Carousel({ data }) {
  return (
    <div className={styles.carousel}>
      {data.length
        ? data.map((dataElement) => (
            <Card key={dataElement.id} element={dataElement} />
          ))
        : "Loading..."}
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

import React from "react";
import PropTypes from "prop-types";
import styles from './Card.module.css'; 

export default function Card({ element }) {
  const { id, name, image, mediaUrl, summary } = element;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3 className={styles.truncate}>{name}</h3>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
};

import React from "react";
import PropTypes from "prop-types";

export default function Card({ element }) {
  const { id, name, image, mediaUrl, summary } = element;

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.object,
};

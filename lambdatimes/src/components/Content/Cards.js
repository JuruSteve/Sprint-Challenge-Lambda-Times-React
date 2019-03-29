import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
    </div>
  );
};

Card.propTypes = {
  cards: PropTypes.array
};
export default Cards;

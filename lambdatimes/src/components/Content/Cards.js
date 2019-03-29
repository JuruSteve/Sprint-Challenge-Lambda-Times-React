import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";

const Cards = props => {
  return (
    <CardsStyles>
      {props.cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
    </CardsStyles>
  );
};

const CardsStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

Card.propTypes = {
  cards: PropTypes.array
};
export default Cards;

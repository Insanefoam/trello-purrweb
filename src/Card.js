import React from 'react';

const Card = ({ name, comments, cardClickHandler }) => (
  <div
    className="card"
    style={{ border: '1px solid black', marginBottom: '15px' }}
    onClick={cardClickHandler}
  >
    <div className="card__title">{name}</div>
    <div className="card__comments">{comments}</div>
  </div>
);

export default Card;

import React from 'react';
import PropsType from 'prop-types';

export default function Card({ name, comments, cardClickHandler }) {
  return (
    <div
      className="card"
      style={{ border: '1px solid black', marginBottom: '15px' }}
      onClick={cardClickHandler}
    >
      <div className="card__title">{name}</div>
      <div className="card__comments">{comments}</div>
    </div>
  );
}

Card.propTypes = {
  name: PropsType.string.isRequired,
  comments: PropsType.number.isRequired,
  cardClickHandler: PropsType.func.isRequired,
};

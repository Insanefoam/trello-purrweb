import React from 'react';
import { useSelector } from 'react-redux';
import PropsType from 'prop-types';

export default function Card({ name, id }) {
  const commentsCount = useSelector(
    (state) => state.comments.filter((comment) => comment.cardId === id).length,
  );

  return (
    <div
      className="card"
      style={{ border: '1px solid black', marginBottom: '15px' }}
      role="button"
    >
      <div className="card__title">{name}</div>
      <div className="card__comments">{commentsCount}</div>
    </div>
  );
}

Card.propTypes = {
  name: PropsType.string.isRequired,
  id: PropsType.number.isRequired,
};

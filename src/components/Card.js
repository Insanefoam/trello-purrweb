import React from 'react';
import { useSelector } from 'react-redux';
import PropsType from 'prop-types';

export default function Card({ name, id, openCardModal }) {
  const commentsCount = useSelector(
    (state) => state.comments.filter((comment) => comment.cardId === id).length,
  );

  return (
    <div
      className="card"
      role="button"
      onClick={() => openCardModal(id)}
    >
      <div className="card__title">{name}</div>
      <div className="card__comments"><small>{commentsCount}</small></div>
    </div>
  );
}

Card.propTypes = {
  name: PropsType.string.isRequired,
  id: PropsType.number.isRequired,
  openCardModal: PropsType.func.isRequired,
};

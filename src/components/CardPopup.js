import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropsType from 'prop-types';
import {
  changeCardName,
  changeCardDescription,
  deleteCard,
  changeComment,
  deleteComment,
  addComment,
} from '../actions/actions';

export default function CardPopup({ id, openCardModal }) {
  const {
    author, name, description, columnId,
  } = {
    ...useSelector(
      (state) => state.cards.filter((card) => card.cardId === id)[0],
    ),
  };
  const columnName = useSelector(
    (state) => state.columns.filter((column) => column.columnId === columnId)[0].title,
  );
  const comments = useSelector((state) => state.comments.filter((comment) => comment.cardId === id));
  const dispatch = useDispatch();

  const commentsItems = comments.map((comment) => (
    <div key={comment.commentId}>
      <input
        value={comment.name}
        style={{ width: '300px' }}
        onChange={(event) => dispatch(changeComment(comment.commentId, event.target.value))}
      />
      <button
        type="button"
        onClick={() => dispatch(deleteComment(comment.commentId))}
      >
        Delete comment
      </button>
      <span>
        Comment author:
        {comment.author}
      </span>
    </div>
  ));

  const [newComment, setNewComment] = useState('');

  const addNewComment = () => {
    dispatch(addComment(id, newComment));
    setNewComment('');
  };

  const closeModal = () => openCardModal(0);

  return (
    <div className="card-popup">
      <button type="button" onClick={closeModal}>
        &times;
      </button>
      <input
        value={name}
        onChange={(event) => dispatch(changeCardName(id, event.target.value))}
      />
      <div>
        {columnName}
        {' '}
        column
      </div>
      <div>
        {author}
        - card Author
      </div>
      <button
        onClick={() => {
          dispatch(deleteCard(id));
          closeModal();
        }}
        type="button"
      >
        Delete card
      </button>
      <input
        className="card-description"
        value={description}
        onChange={(event) => dispatch(changeCardDescription(id, event.target.value))}
      />
      <div className="comments-container">
        {commentsItems}
        <input
          className="new-card-input"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        />
        <button type="button" onClick={addNewComment}>
          Add comment
        </button>
      </div>
    </div>
  );
}

CardPopup.propTypes = {
  id: PropsType.number.isRequired,
  openCardModal: PropsType.func.isRequired,
};
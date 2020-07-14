import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropsType from 'prop-types';
import { getCard, getColumnName, getComments } from '../selectors';
import {
  changeCardName,
  changeCardDescription,
  deleteCard,
  changeComment,
  deleteComment,
  addComment,
} from '../actions';

const CardModal = ({ id, closeCardModal }) => {
  const {
    author, name, description, columnId,
  } = useSelector((state) => getCard(state, id));
  const columnName = useSelector((state) => getColumnName(state, columnId));
  const comments = useSelector((state) => getComments(state, id));
  const dispatch = useDispatch();

  const commentsItems = comments.map((comment) => (
    <div key={comment.commentId} className="comment">
      <input
        value={comment.name}
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

  return (
    <div className="card-popup">
      <button type="button" onClick={closeCardModal}>
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
          closeCardModal();
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
};

CardModal.propTypes = {
  id: PropsType.number.isRequired,
  closeCardModal: PropsType.func.isRequired,
};

export default CardModal;

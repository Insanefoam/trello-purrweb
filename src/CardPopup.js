import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropsType from 'prop-types';
import Card from './Card';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

export default function CardPopup({ id }) {
  const {
    author, name, description, columnId,
  } = { ...useSelector((state) => state.cards.filter((card) => card.cardId === id)[0]) };
  const columnName = useSelector((state) => state.columns.filter((column) => column.columnId === columnId)[0].title);
  const comments = useSelector((state) => state.comments);

  const commentsComponents = comments.map((comment) => (
    <div key={comment.commentId}>
      <input
        value={comment.name}
        style={{ width: '300px' }}
        // onChange={(event) => changeComment(comment.commentId, event.target.value)}
      />
      <button type="button" onClick>
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
    // addComment(newComment);
    setNewComment('');
  };

  return (
    <div style={style} className="card-popup">
      <button onClick type="button">
        Close
      </button>
      <input
        value={name}
        onChange
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
      <button onClick type="button">
        Delete card
      </button>
      <input
        className="card-description"
        value={description}
        onChange
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {commentsComponents}
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
  card: PropsType.instanceOf(Card).isRequired,
  comments: PropsType.arrayOf(PropsType.string).isRequired,
  columnName: PropsType.string.isRequired,
  closeCardPopup: PropsType.func.isRequired,
  changeCardName: PropsType.func.isRequired,
  deleteCard: PropsType.func.isRequired,
  changeDescription: PropsType.func.isRequired,
  changeComment: PropsType.func.isRequired,
  deleteComment: PropsType.func.isRequired,
  addComment: PropsType.func.isRequired,
};

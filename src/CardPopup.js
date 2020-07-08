import React, { useState } from 'react';
import PropsType from 'prop-types';
import Card from './Card';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

export default function CardPopup({
  card, comments, columnName, closeCardPopup,
  changeCardName, deleteCard, changeDescription,
  changeComment, deleteComment, addComment,
}) {
  const commentsComponents = comments.map((comment) => (
    <div>
      <input
        value={comment.name}
        style={{ width: '300px' }}
        onChange={(event) => changeComment(comment.commentId, event.target.value)}
      />
      <button type="button" onClick={() => deleteComment(comment.commentId)}>
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
    addComment(newComment);
    setNewComment('');
  };

  return (
    <div
      style={style}
      className="card-popup"
    >
      <button onClick={closeCardPopup} type="button">Close</button>
      <input value={card.name} onChange={(event) => changeCardName(event.target.value)} />
      <div>
        {columnName}
        {' '}
        column
      </div>
      <div>
        {card.author}
        Author
      </div>
      <button onClick={deleteCard} type="button">Delete card</button>
      <input className="card-description" value={card.description} onChange={(event) => changeDescription(event.target.value)} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {commentsComponents}
        <input className="new-card-input" onChange={(event) => setNewComment(event.target.value)} value={newComment} />
        <button type="button" onClick={addNewComment}>Add comment</button>
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

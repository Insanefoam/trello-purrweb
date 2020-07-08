import React from 'react';
import PropsType from 'prop-types';

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
  changeComment,
}) {
  const commentsComponents = comments.map((comment) => (
    <div>
      <input
        value={comment.name}
        style={{ width: '300px' }}
        onChange={(event) => changeComment(comment.commentId, event.target.value)}
      />
      <button type="button">
        Delete comment
      </button>
      <span>
        Comment author:
        {comment.author}
      </span>
    </div>
  ));

  return (
    <div
      style={style}
      tabIndex="0"
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
        <input className="new-card-input" />
        <button>Add comment</button>
      </div>
    </div>
  );
}

CardPopup.propTypes = {

};

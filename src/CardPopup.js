import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

const CardPopup = (props) => {
  const comments = props.comments.map((el, index) => (
    <div>
      <input
        value={el.name}
        style={{ width: '300px' }}
        onChange={props.changeCommentaryHandler.bind(this, index)}
      />
      <button onClick={props.deleteCommentHandler.bind(this, index)}>
        Delete comment
      </button>
      <span>
        Author:
        {el.author}
      </span>
    </div>
  ));

  return (
    <div
      style={style}
      tabIndex="0"
      onKeyDown={(event) => (event.key === 'Escape' ? props.cardCloseHandler() : undefined)}
    >
      <button onClick={props.cardCloseHandler}>Close</button>
      <input value={props.cardName} onChange={props.cardNameChangeHandler} />
      <div>
        {props.columnName}
        {' '}
        column
      </div>
      <div>
        {props.author}
        {' '}
        Author
      </div>
      <button onClick={props.deleteCardHandler}>Delete card</button>
      <input value={props.description} onChange={props.changeCardDescriptionHandler} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {comments}
        <input onChange={props.changeNewCommentaryHandler} value={props.newComment} />
        <button onClick={props.addNewCommentaryHandler}>Add comment</button>
      </div>
    </div>
  );
};
export default CardPopup;

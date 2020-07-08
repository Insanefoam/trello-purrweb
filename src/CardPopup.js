import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

export default function CardPopup({ comments }) {
  const commentsComponents = comments.map((el, index) => (
    <div>
      <input
        value={el.name}
        style={{ width: '300px' }}
      />
      <button type="button">
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
    >
      <button>Close</button>
      <input />
      <div>
        {' '}
        column
      </div>
      <div>
        {' '}
        Author
      </div>
      <button>Delete card</button>
      <input />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {commentsComponents}
        <input />
        <button>Add comment</button>
      </div>
    </div>
  );
}

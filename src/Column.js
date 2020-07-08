import React from 'react';
import Card from './Card';

export default function Column({
  cards,
  title,
  inputTitleChangeHandler,
  changeNewCardNameHandler,
  newCardName,
  addNewCardClickHandler,
}) {
  const cardsComponents = cards.map((el) => (
    <Card
      name={el.name}
      comments={el.commentsIds.length}
      key={el.cardId}
    // cardClickHandler={props.cardClickHandler.bind(this, index)}
    />
  ));

  return (
    <div
      className="column"
      style={{ border: '1px solid black', padding: '20px' }}
    >
      <div className="column__title" style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(event) => inputTitleChangeHandler(event.target.value)}
        />
      </div>
      <div className="card-container">
        {cardsComponents}
        <div>
          <input
            onChange={changeNewCardNameHandler}
            value={newCardName}
          />
        </div>
        <button onClick={addNewCardClickHandler}>Add another card</button>
      </div>
    </div>
  );
}

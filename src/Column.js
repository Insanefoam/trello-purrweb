import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Column({
  cards,
  title,
  inputTitleChangeHandler,
  newCardButtonClickHandler,
}) {
  const cardsComponents = cards.map((el) => (
    <Card
      name={el.name}
      comments={el.commentsIds.length}
      key={el.cardId}
    // cardClickHandler={props.cardClickHandler.bind(this, index)}
    />
  ));

  const [newCardName, setNewCardName] = useState('');

  const changeNewCardNameHandler = (name) => setNewCardName(name);

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
            onChange={(event) => changeNewCardNameHandler(event.target.value)}
            value={newCardName}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            newCardButtonClickHandler(newCardName);
            setNewCardName('');
          }}
        >
          Add another card
        </button>
      </div>
    </div>
  );
}

Column.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired,
  title: PropTypes.string.isRequired,
  inputTitleChangeHandler: PropTypes.func.isRequired,
  newCardButtonClickHandler: PropTypes.func.isRequired,
};

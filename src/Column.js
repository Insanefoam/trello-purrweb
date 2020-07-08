import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Column({
  cards,
  comments,
  title,
  changeTitle,
  newCardButtonClickHandler,
  cardClickHandler,
}) {
  const cardsComponents = cards.map((el, index) => (
    <Card
      name={el.name}
      comments={comments[index]}
      key={el.cardId}
      cardClickHandler={() => cardClickHandler(el.cardId)}
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
          onChange={(event) => changeTitle(event.target.value)}
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
  comments: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
  newCardButtonClickHandler: PropTypes.func.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Column({
  cards,
  comments,
  title,
  changeTitle,
  addNewCard,
  openCardModal,
}) {
  const cardItems = cards.map((el, index) => (
    <Card
      name={el.name}
      comments={comments[index]}
      key={el.cardId}
      openCardModal={() => openCardModal(el.cardId)}
    />
  ));

  const [newCardName, setNewCardName] = useState('');

  const changeCardName = (name) => setNewCardName(name);

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
        {cardItems}
        <div>
          <input
            onChange={(event) => changeCardName(event.target.value)}
            value={newCardName}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            addNewCard(newCardName);
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
  addNewCard: PropTypes.func.isRequired,
  openCardModal: PropTypes.func.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';

import { changeColumnTitle, addCard } from './actions/actions';

export default function Column({
  title, id, openCardModal,
}) {
  const cards = useSelector((state) => state.cards.filter((card) => card.columnId === id));
  const cardItems = cards.map((el) => (
    <Card
      name={el.name}
      id={el.cardId}
      openCardModal={openCardModal}
      key={el.cardId}
    />
  ));

  const dispath = useDispatch();

  const changeHandler = (name) => dispath(changeColumnTitle(id, name));

  const [newCardName, setNewCardName] = useState('');
  const clickHandler = () => {
    dispath(addCard(newCardName, id));
    setNewCardName('');
  };

  return (
    <div
      className="column"
      style={{ border: '1px solid black', padding: '20px' }}
    >
      <div className="column__title" style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(event) => changeHandler(event.target.value)}
        />
      </div>
      <div className="card-container">
        {cardItems}
        <div>
          <input
            onChange={(event) => setNewCardName(event.target.value)}
            value={newCardName}
          />
        </div>
        <button
          type="button"
          onClick={clickHandler}
        >
          Add another card
        </button>
      </div>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openCardModal: PropTypes.func.isRequired,
};

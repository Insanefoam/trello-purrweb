import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../selectors';
import Card from './Card';

import { changeColumnTitle, addCard } from '../actions';

const Column = ({ title, id, openCardModal }) => {
  const cards = useSelector((state) => getCards(state, id));
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
    >
      <div className="column__title">
        <input
          type="text"
          value={title}
          onChange={(event) => changeHandler(event.target.value)}
        />
      </div>
      <div className="card-container">
        {cardItems}
        <div className="newcard-container">
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
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openCardModal: PropTypes.func.isRequired,
};

export default Column;

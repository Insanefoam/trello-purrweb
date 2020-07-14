import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getColumns } from '../selectors';
import Column from './Column';
import LoginForm from './LoginForm';
import CardModal from './CardModal';

// store direct + store configure
// create store init 2 arg
// actions directiory => store dir and constants
// username redux
// author without localstorage

const App = () => {
  const columns = useSelector(getColumns);

  const [modalCardId, setModalCardId] = useState(0);

  const openCardModal = (cardId) => {
    setModalCardId(cardId);
  };

  const closeCardModal = () => {
    openCardModal(null);
  };

  const [userName, setUserName] = useState(localStorage.getItem('username'));

  const submitUserName = (name) => {
    setUserName(name);
    localStorage.setItem('username', name);
  };

  return (
    <div className="container">
      {!userName && <LoginForm submitUserName={submitUserName} />}
      {!!modalCardId
        && <CardModal id={modalCardId} closeCardModal={closeCardModal} />}
      <div className="title__username">
        Hello
        {' '}
        {userName}
      </div>
      <div
        className="title__logo"
      >
        Trello
      </div>
      <div
        className="column-wrapper"
      >
        {columns.map((column) => (
          <Column
            title={column.title}
            id={column.columnId}
            openCardModal={openCardModal}
            key={column.columnId}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

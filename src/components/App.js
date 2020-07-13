import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

export default function App() {
  const columns = useSelector((state) => state.columns);

  const [modalCardId, setModalCardId] = useState(0);

  const openCardModal = (cardId) => {
    setModalCardId(cardId);
  };

  const [userName, setUserName] = useState(localStorage.getItem('username'));

  const submitUserName = (name) => {
    setUserName(name);
    localStorage.setItem('username', name);
  };

  return (
    <div className="container">
      {!userName ? <LoginForm submitUserName={submitUserName} /> : null}
      {Boolean(modalCardId) && (
        <CardPopup id={modalCardId} openCardModal={openCardModal} />
      )}
      <div className="title__username">
        Hello
        {' '}
        {userName}
      </div>
      <div
        className="title__logo"
        style={{ textAlign: 'center', marginBottom: '30px' }}
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
}

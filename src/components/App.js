import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getColumns } from '../selectors';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

// store direct + store configure
// card popup function to arrow
// spread card popup
// inline styles
// open card modal => close card modal(null)
// card popup => card modal
// actions directiory => store dir and constants
// username redux
// author without localstorage
export default function App() {
  const columns = useSelector(getColumns);

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
      {!userName && <LoginForm submitUserName={submitUserName} />}
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

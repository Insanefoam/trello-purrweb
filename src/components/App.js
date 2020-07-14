import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getColumns, getUsername } from '../store/selectors';
import Column from './Column';
import LoginForm from './LoginForm';
import CardModal from './CardModal';
import { initUser } from '../store/actions';

// actions directiory => store dir and constants

const App = () => {
  const dispath = useDispatch();
  const columns = useSelector(getColumns);
  const [modalCardId, setModalCardId] = useState(null);

  const openCardModal = (cardId) => {
    setModalCardId(cardId);
  };

  const closeCardModal = () => {
    openCardModal(null);
  };

  const userName = useSelector(getUsername);

  const submitUserName = (name) => {
    dispath(initUser(name));
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

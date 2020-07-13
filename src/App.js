import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';
import { addCard, deleteCard } from './actions/actions';

export default function App() {
  const [userName, setUserName] = useState(
    localStorage.getItem('username') || '',
  );

  const columns = useSelector((state) => state.columns);
  // const updateLocalStorage = () => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  //   localStorage.setItem('comments', JSON.stringify(comments));
  // };

  // useEffect(() => {
  //   updateLocalStorage();
  // }, [cards, comments]);

  const [isModalCardOpen, setModalCardOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(-1);

  // const openCardModal = (cardId) => {
  //   setModalCardOpen(!isModalCardOpen);
  //   setSelectedCardId(cardId);
  // };

  // const getCurrentColumnName = () => {
  //   const currentCard = cards.filter(
  //     (card) => card.cardId === selectedCardId,
  //   )[0];
  //   return columns.filter(
  //     (column) => column.columnId === currentCard.columnId,
  //   )[0].title;
  // };

  const submitUserName = (name) => {
    setUserName(name);
    localStorage.setItem('username', name);
  };

  return (
    <div className="container" style={{ fontFamily: 'Montserrat' }}>
      {!userName ? <LoginForm submitUserName={submitUserName} /> : null}
      {/* {isModalCardOpen && (
        <CardPopup
          card={cards.filter((card) => card.cardId === selectedCardId)[0]}
          comments={comments.filter(
            (comment) => comment.cardId === selectedCardId,
          )}
          columnName={getCurrentColumnName()}
          closeCardPopup={closeCardPopup}
          changeCardName={changeCardName}
          deleteCard={deleteCard}
          changeDescription={changeDescription}
          changeComment={changeComment}
          deleteComment={deleteComment}
          addComment={addComment}
        />
      )} */}
      <div>
        Hello
        {' '}
        {userName}
      </div>
      <div
        className="title"
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        Trello
      </div>
      <div
        className="column-wrapper"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        {columns.map((column) => (
          <Column
            title={column.title}
            id={column.columnId}
            key={column.columnId}
          />
        ))}
      </div>
    </div>
  );
}

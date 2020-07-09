import React, { useState, useEffect } from 'react';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('username') || '');

  const [columns, setColumns] = useState([
    {
      columnId: 0,
      title: 'TODO',
    },
    {
      columnId: 1,
      title: 'In progress',
    },
    {
      columnId: 2,
      title: 'Testing',
    },
    {
      columnId: 3,
      title: 'Done',
    },
  ]);

  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);

  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);

  const updateLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(cards));
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  useEffect(() => {
    updateLocalStorage();
  }, [cards, comments]);

  const [isModalCardOpen, setModalCardOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(-1);

  const changeTitle = (columnId, title) => {
    setColumns(
      columns.map((el) => (el.columnId === columnId ? { columnId, title } : el)),
    );
  };

  // Update local storage down in methods

  const addNewCard = (columnId, name) => {
    setCards([
      ...cards,
      {
        cardId: Date.now(),
        description: '',
        commentsIds: [],
        name,
        columnId,
        author: userName,
      },
    ]);
  };

  const openCardModal = (cardId) => {
    setModalCardOpen(!isModalCardOpen);
    setSelectedCardId(cardId);
  };

  const getCurrentColumnName = () => {
    const currentCard = cards.filter(
      (card) => card.cardId === selectedCardId,
    )[0];
    return columns.filter(
      (column) => column.columnId === currentCard.columnId,
    )[0].title;
  };

  const closeCardPopup = () => {
    setModalCardOpen(!isModalCardOpen);
    setSelectedCardId(-1);
  };

  const changeCardName = (newName) => {
    setCards(
      cards.map((card) => (card.cardId === selectedCardId ? { ...card, name: newName } : card)),
    );
  };

  const deleteCard = () => {
    setCards(cards.filter((card) => card.cardId !== selectedCardId));
    setModalCardOpen(!isModalCardOpen);
    setSelectedCardId(-1);
  };

  const changeDescription = (newDescription) => {
    setCards(
      cards.map((card) => (card.cardId === selectedCardId
        ? { ...card, description: newDescription }
        : card)),
    );
  };

  const changeComment = (id, newComment) => {
    setComments(
      comments.map((comment) => (comment.commentId === id ? { ...comment, name: newComment } : comment)),
    );
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.commentId !== id));
  };

  const addComment = (name) => {
    setComments([
      ...comments,
      {
        commentId: Date.now(),
        author: userName,
        name,
        cardId: selectedCardId,
      },
    ]);
  };

  const submitUserName = (name) => {
    setUserName(name);
    localStorage.setItem('username', name);
  };

  return (
    <div className="container" style={{ fontFamily: 'Montserrat' }}>
      {!userName ? <LoginForm submitUserName={submitUserName} /> : null}
      {isModalCardOpen && (
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
      )}
      <div>
        Hello
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
            cards={cards.filter((card) => card.columnId === column.columnId)}
            comments={cards
              .filter((card) => card.columnId === column.columnId)
              .map(
                (card) => comments.filter((comment) => card.cardId === comment.cardId)
                  .length,
              )}
            key={column.columnId}
            changeTitle={(newName) => changeTitle(column.columnId, newName)}
            addNewCard={(name) => addNewCard(column.columnId, name)}
            openCardModal={openCardModal}
          />
        ))}
      </div>
    </div>
  );
}

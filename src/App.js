import React, { useState, useEffect } from 'react';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

export default function App() {
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

  const [cards, setCards] = useState([]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const rawCards = localStorage.getItem('cards');
    setCards(JSON.parse(rawCards));
    const rawComments = localStorage.getItem('comments');
    setComments(JSON.parse(rawComments));
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [cards, comments]);

  const [isCardClicked, setIsCardClicked] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(-1);
  const [isUserLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState('');

  const changeTitle = (columnId, title) => {
    setColumns(columns.map((el) => (el.columnId === columnId ? { columnId, title } : el)));
  };

  const addNewCard = (columnId, name) => {
    setCards([...cards, {
      cardId: Date.now(), description: '', commentsIds: [], name, columnId, author: userName,
    }]);
  };

  const cardClickHandler = (cardId) => {
    setIsCardClicked(!isCardClicked);
    setClickedCardId(cardId);
  };

  const getCurrentColumnName = () => {
    const currentCard = cards.filter((card) => card.cardId === clickedCardId)[0];
    return columns.filter((column) => column.columnId === currentCard.columnId)[0].title;
  };

  const closeCardPopup = () => {
    setIsCardClicked(!isCardClicked);
    setClickedCardId(-1);
  };

  const changeCardName = (newName) => {
    setCards(cards.map((card) => (card.cardId === clickedCardId ? { ...card, name: newName } : card)));
  };

  const deleteCard = () => {
    setCards(cards.filter((card) => card.cardId !== clickedCardId));
    setIsCardClicked(!isCardClicked);
    setClickedCardId(-1);
  };

  const changeDescription = (newDescription) => {
    setCards(cards.map((card) => (card.cardId === clickedCardId ? { ...card, description: newDescription } : card)));
  };

  const changeComment = (id, newComment) => {
    setComments(comments.map((comment) => (comment.commentId === id ? { ...comment, name: newComment } : comment)));
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.commentId !== id));
  };

  const addComment = (name) => {
    setComments([...comments, {
      commentId: Date.now(), author: userName, name, cardId: clickedCardId,
    }]);
  };

  const submitUserName = (name) => {
    setUserName(name);
    setUserLogged(true);
  };

  return (
    <div className="container" style={{ fontFamily: 'Montserrat' }}>
      {!isUserLogged ? <LoginForm submitUserName={submitUserName} /> : null}
      {isCardClicked ? (
        <CardPopup
          card={cards.filter((card) => card.cardId === clickedCardId)[0]}
          comments={comments.filter((comment) => comment.cardId === clickedCardId)}
          columnName={getCurrentColumnName()}
          closeCardPopup={closeCardPopup}
          changeCardName={changeCardName}
          deleteCard={deleteCard}
          changeDescription={changeDescription}
          changeComment={changeComment}
          deleteComment={deleteComment}
          addComment={addComment}
        />
      ) : null}
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
            cards={cards.filter((card) => (card.columnId === column.columnId))}
            comments={cards.filter((card) => (card.columnId === column.columnId)).map((card) => comments.filter((comment) => card.cardId === comment.cardId).length)}
            key={column.columnId}
            changeTitle={(newName) => changeTitle(column.columnId, newName)}
            addNewCard={(name) => addNewCard(column.columnId, name)}
            cardClickHandler={cardClickHandler}
          />
        ))}
      </div>
    </div>
  );
}

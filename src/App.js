import React, { useState } from 'react';
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
  ]);

  const [cards, setCards] = useState(
    [
      {
        cardId: 0,
        name: 'Watch something',
        description: 'No description',
        author: 'Card Author',
        columnId: 0,
      },
      {
        cardId: 1,
        name: 'Eat something',
        description: 'No description',
        author: 'Card Author',
        columnId: 0,
      },
      {
        cardId: 2,
        name: 'Todo something',
        description: 'No description',
        author: 'Card Author',
        columnId: 1,
      },
      {
        cardId: 3,
        name: 'Lorem Ipsum',
        description: 'No description',
        author: 'Card Author',
        columnId: 1,
      },
    ],
  );

  const [comments, setComments] = useState([
    {
      commentId: 0,
      author: 'Author',
      name: 'Ayy lmao',
      cardId: 0,
    },
    {
      commentId: 1,
      author: 'Author',
      name: 'Ogo voteta da',
      cardId: 1,
    },
    {
      commentId: 2,
      author: 'Author',
      name: 'Lorem comment',
      cardId: 2,
    },
  ]);

  const [isCardClicked, setIsCardClicked] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(-1);

  const changeTitle = (columnId, title) => {
    setColumns(columns.map((el) => (el.columnId === columnId ? { columnId, title } : el)));
  };

  // TODO: Add UUID
  // TODO: rename function
  const newCardButtonClickHandler = (columnId, name) => {
    setCards([...cards, {
      cardId: Date.now(), description: '', commentsIds: [], name, columnId,
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
    setCards([...cards].map((card) => (card.cardId === clickedCardId ? { ...card, name: newName } : card)));
  };

  const deleteCard = () => {
    setCards([...cards].filter((card) => card.cardId !== clickedCardId));
    setIsCardClicked(!isCardClicked);
    setClickedCardId(-1);
  };

  const changeDescription = (newDescription) => {
    setCards([...cards].map((card) => (card.cardId === clickedCardId ? { ...card, description: newDescription } : card)));
  };

  const changeComment = (id, newComment) => {
    setComments([...comments].map((comment) => (comment.commentId === id ? { ...comment, name: newComment } : comment)));
  };

  const deleteComment = (id) => {
    setComments([...comments].filter((comment) => comment.commentId !== id));
  };

  const addComment = (name) => {
    setComments([...comments, {
      commentId: Date.now(), author: 'Author', name, cardId: clickedCardId,
    }]);
  };

  return (
    <div className="container" style={{ fontFamily: 'Montserrat' }}>
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
      <div>Hello Author name</div>
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
            comments={cards.filter((card) => (card.columnId === column.columnId)).map((card) => [...comments].filter((comment) => card.cardId === comment.cardId).length)}
            key={column.columnId}
            changeTitle={(newName) => changeTitle(column.columnId, newName)}
            newCardButtonClickHandler={(name) => newCardButtonClickHandler(column.columnId, name)}
            cardClickHandler={cardClickHandler}
          />
        ))}
      </div>
    </div>
  );
}

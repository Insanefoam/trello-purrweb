import React, { useState } from 'react';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

export default function App() {
  // this.state = {
  //   newCardsName: [],
  //   //start: true,
  //   author: "",
  //   isCardClicked: false,
  //   clickedColumn: -1,
  //   clickedCard: -1,
  //   newComment: "",
  // };

  // this.submitAuthorNameHandler = this.submitAuthorNameHandler.bind(this);
  // this.addNewCardClickHandler = this.addNewCardClickHandler.bind(this);
  // this.changeNewCardNameHandler = this.changeNewCardNameHandler.bind(this);
  // this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
  // this.cardClickHandler = this.cardClickHandler.bind(this);
  // this.cardCloseHandler = this.cardCloseHandler.bind(this);
  // this.cardNameChangeHandler = this.cardNameChangeHandler.bind(this);
  // this.deleteCardHandler = this.deleteCardHandler.bind(this);
  // this.changeCardDescriptionHandler = this.changeCardDescriptionHandler.bind(this);
  // this.deleteCommentHandler = this.deleteCommentHandler.bind(this);
  // this.changeCommentaryHandler = this.changeCommentaryHandler.bind(this);
  // this.changeNewCommentaryHandler = this.changeNewCommentaryHandler.bind(this);
  // this.addNewCommentaryHandler = this.addNewCommentaryHandler.bind(this);

  // submitAuthorNameHandler() {
  //   this.setState({
  //     start: false
  //   })
  // }

  // changeColumnTitleHandler(index, event) {
  //   let columns = [...this.state.columns];
  //   columns[index].name = event.target.value;
  //   this.setState({
  //     columns
  //   })
  // }

  // changeNewCardNameHandler(index, event) {
  //   let newCardsName = [...this.state.newCardsName];
  //   newCardsName[index] = event.target.value;
  //   this.setState({
  //     newCardsName
  //   })
  // }

  // addNewCardClickHandler() {

  // }

  // changeAuthorNameHandler(event) {
  //   this.setState({
  //     author: event.target.value
  //   })
  // }

  // cardClickHandler(clickedColumn, clickedCard) {
  //   this.setState({
  //     isCardClicked: true,
  //     clickedColumn,
  //     clickedCard
  //   })
  // }

  // cardCloseHandler() {
  //   this.setState({
  //     isCardClicked: false
  //   })
  // }

  // cardNameChangeHandler(event) {
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards[this.state.clickedCard].name = event.target.value;
  //   this.setState({
  //     columns
  //   })
  // }

  // deleteCardHandler() {
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards.splice(this.state.clickedCard, 1);
  //   this.setState({
  //     columns,
  //     isCardClicked: false,
  //     clickedCard: '',
  //     clickedColumn: ''
  //   })
  // }

  // changeCardDescriptionHandler(event) {
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards[this.state.clickedCard].description = event.target.value;
  //   this.setState({
  //     columns
  //   })
  // }

  // deleteCommentHandler(index) {
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards[this.state.clickedCard].comments.splice(index, 1);
  //   this.setState({
  //     columns
  //   })
  // }

  // changeCommentaryHandler(index, event) {
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards[this.state.clickedCard].comments[index].name = event.target.value;
  //   this.setState({
  //     columns
  //   })
  // }

  // changeNewCommentaryHandler(event) {
  //   this.setState({
  //     newComment: event.target.value
  //   })
  // }

  // addNewCommentaryHandler() {
  //   let comment = {
  //     name: this.state.newComment,
  //     author: this.state.author
  //   }
  //   let columns = [...this.state.columns];
  //   columns[this.state.clickedColumn].cards[this.state.clickedCard].comments.push(comment);
  //   this.setState({
  //     columns,
  //     newComment: ''
  //   })
  // }

  // const columnsComponents = this.state.columns.map((el, index) => (
  //   <Column
  //     name={el.name}
  //     cards={this.state.cards.byId.filter((el) => index === el.columndId)}
  //     key={index}
  //     newCardName={this.state.newCardsName[index]}
  //     cardClickHandler={() => this.cardClickHandler(index)}
  //     changeNewCardNameHandler={(event) =>
  //       this.changeNewCardNameHandler(index, event)
  //     }
  //     addNewCardClickHandler={() => this.addNewCardClickHandler(index)}
  //     changeColumnTitleHandler={() => this.changeColumnTitleHandler(index)}
  //   />
  // ));

  // let inputAuthorPopup = null;
  // if (this.state.start) {
  //   inputAuthorPopup = (
  //     <LoginForm
  //       submitAuthorNameHandler={this.submitAuthorNameHandler}
  //       changeAuthorNameHandler={this.changeAuthorNameHandler}
  //     />
  //   );
  // }

  // let cardPopup = null;
  // if (this.state.isCardClicked) {
  //   cardPopup = (
  //     <CardPopup
  //       cardName={
  //         this.state.columns[this.state.clickedColumn].cards[
  //           this.state.clickedCard
  //         ].name
  //       }
  //       columnName={this.state.columns[this.state.clickedColumn].name}
  //       author={this.state.author}
  //       description={
  //         this.state.columns[this.state.clickedColumn].cards[
  //           this.state.clickedCard
  //         ].description
  //       }
  //       comments={
  //         this.state.columns[this.state.clickedColumn].cards[
  //           this.state.clickedCard
  //         ].comments
  //       }
  //       newComment={this.state.newComment}
  //       ref={this.cardPopupRef}
  //       cardCloseHandler={this.cardCloseHandler}
  //       cardNameChangeHandler={this.cardNameChangeHandler}
  //       deleteCardHandler={this.deleteCardHandler}
  //       changeCardDescriptionHandler={this.changeCardDescriptionHandler}
  //       deleteCommentHandler={this.deleteCommentHandler}
  //       changeCommentaryHandler={this.changeCommentaryHandler}
  //       changeNewCommentaryHandler={this.changeNewCommentaryHandler}
  //       addNewCommentaryHandler={this.addNewCommentaryHandler}
  //     />
  //   );
  // }

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
        columnId: 0,
        commentsIds: [0],
      },
      {
        cardId: 1,
        name: 'Eat something',
        description: 'No description',
        columnId: 0,
        commentsIds: [1],
      },
      {
        cardId: 2,
        name: 'Todo something',
        description: 'No description',
        columnId: 1,
        commentsIds: [2],
      },
      {
        cardId: 3,
        name: 'Lorem Ipsum',
        description: 'No description',
        columndId: 1,
        commentsIds: [2],
      },
    ],
  );

  const [comments, setComments] = useState([
    {
      commentId: 0,
      author: 'Author',
      name: 'Ayy lmao',
      id: '',
    },
    {
      commentId: 1,
      author: 'Author',
      name: 'Ogo voteta da',
    },
    {
      commentId: 2,
      author: 'Author',
      name: 'Lorem comment',
    },
  ]);

  const inputTitleChangeHandler = (columnId, title) => {
    setColumns(columns.map((el) => (el.columnId === columnId ? { columnId, title } : el)));
  };

  // TODO: Add UUID
  const newCardButtonClickHandler = (columnId, name) => {
    setCards([...cards, {
      cardId: Date.now(), description: '', commentsIds: [], name, columnId,
    }]);
  };

  return (
    <div className="container" style={{ fontFamily: 'Montserrat' }}>
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
        {columns.map((el) => (
          <Column
            title={el.title}
            cards={cards.filter((card) => card.columnId === el.columnId)}
            key={el.columnId}
            inputTitleChangeHandler={(newName) => inputTitleChangeHandler(el.columnId, newName)}
            newCardButtonClickHandler={(name) => newCardButtonClickHandler(el.columnId, name)}
          />
        ))}
      </div>
    </div>
  );
}

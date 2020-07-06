import React from 'react';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

//TODO: Add/delete/change card description
//TODO: Add comments to card
//TODO: Add styles

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          name: 'TODO',
          cards: [{
            name: 'Watch something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          },
          {
            name: 'Eat something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          }
          ]
        },
        {
          name: 'In Progress',
          cards: [{
            name: 'Watch something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          },
          {
            name: 'Eat something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          }
          ]
        },
        {
          name: 'Testing',
          cards: [{
            name: 'Watch something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          },
          {
            name: 'Eat something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          }
          ]
        },
        {
          name: 'Done',
          cards: [{
            name: 'Watch something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }, { name: 'Some comment', author: 'Author' }],
            description: 'No description'
          },
          {
            name: 'Eat something',
            comments: [{ name: 'Ayy lmao', author: 'Author' }],
            description: 'No description'
          }
          ]
        }
      ],
      newCardsName: [],
      //start: true,
      author: '',
      isCardClicked: false,
      clickedColumn: '',
      clickedCard: ''
    }

    this.submitAuthorNameHandler = this.submitAuthorNameHandler.bind(this);
    this.addNewCardClickHandler = this.addNewCardClickHandler.bind(this);
    this.changeNewCardNameHandler = this.changeNewCardNameHandler.bind(this);
    this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.cardCloseHandler = this.cardCloseHandler.bind(this);
    this.cardNameChangeHandler = this.cardNameChangeHandler.bind(this);
    this.deleteCardHandler = this.deleteCardHandler.bind(this);
    this.changeCardDescriptionHandler = this.changeCardDescriptionHandler.bind(this);
    this.deleteCommentHandler = this.deleteCommentHandler.bind(this);
    this.changeCommentaryHandler = this.changeCommentaryHandler.bind(this);
  }

  submitAuthorNameHandler(event) {
    this.setState({
      start: false
    })
  }

  changeColumnTitleHandler(index, event) {
    let columns = [...this.state.columns];
    columns[index].name = event.target.value;
    this.setState({
      columns
    })
  }

  changeNewCardNameHandler(index, event) {
    let newCardsName = [...this.state.newCardsName];
    newCardsName[index] = event.target.value;
    this.setState({
      newCardsName
    })
  }

  addNewCardClickHandler(index, event) {
    let newCard = {
      name: this.state.newCardsName[index],
      comments: []
    }
    const columns = [...this.state.columns];
    columns[index].cards.push(newCard);

    let newCardsName = [...this.state.newCardsName];
    newCardsName[index] = '';
    this.setState({
      columns,
      newCardsName
    })
  }

  changeAuthorNameHandler(event) {
    this.setState({
      author: event.target.value
    })
  }

  cardClickHandler(clickedColumn, clickedCard, event) {
    this.setState({
      isCardClicked: true,
      clickedColumn,
      clickedCard
    })
  }

  cardCloseHandler() {
    this.setState({
      isCardClicked: false
    })
  }

  cardNameChangeHandler(event) {
    let columns = [...this.state.columns];
    columns[this.state.clickedColumn].cards[this.state.clickedCard].name = event.target.value;
    this.setState({
      columns
    })
  }

  deleteCardHandler(event) {
    let columns = [...this.state.columns];
    columns[this.state.clickedColumn].cards.splice(this.state.clickedCard, 1);
    this.setState({
      columns,
      isCardClicked: false,
      clickedCard: '',
      clickedColumn: ''
    })
  }

  changeCardDescriptionHandler(event) {
    let columns = [...this.state.columns];
    columns[this.state.clickedColumn].cards[this.state.clickedCard].description = event.target.value;
    this.setState({
      columns
    })
  }

  deleteCommentHandler(index, event) {
    let columns = [...this.state.columns];
    columns[this.state.clickedColumn].cards[this.state.clickedCard].comments.splice(index, 1);
    this.setState({
      columns
    })
  }

  changeCommentaryHandler(index, event) {
    let columns = [...this.state.columns];
    columns[this.state.clickedColumn].cards[this.state.clickedCard].comments[index].name = event.target.value;
    this.setState({
      columns
    })
  }

  render() {
    const columns = this.state.columns.map((el, index) =>
      <Column name={el.name} cards={el.cards} key={index} newCardName={this.state.newCardsName[index]}
        cardClickHandler={this.cardClickHandler.bind(this, index)}
        changeNewCardNameHandler={this.changeNewCardNameHandler.bind(this, index)}
        addNewCardClickHandler={this.addNewCardClickHandler.bind(this, index)}
        changeColumnTitleHandler={this.changeColumnTitleHandler.bind(this, index)} />);

    let firstPopUp = null;
    if (this.state.start) {
      firstPopUp = <LoginForm
        submitAuthorNameHandler={this.submitAuthorNameHandler}
        changeAuthorNameHandler={this.changeAuthorNameHandler} />;
    };

    let cardPopup = null;
    if (this.state.isCardClicked) {
      cardPopup = <CardPopup
        cardName={this.state.columns[this.state.clickedColumn].cards[this.state.clickedCard].name}
        columnName={this.state.columns[this.state.clickedColumn].name}
        author={this.state.author}
        description={this.state.columns[this.state.clickedColumn].cards[this.state.clickedCard].description}
        comments={this.state.columns[this.state.clickedColumn].cards[this.state.clickedCard].comments}
        cardCloseHandler={this.cardCloseHandler}
        cardNameChangeHandler={this.cardNameChangeHandler}
        deleteCardHandler={this.deleteCardHandler}
        changeCardDescriptionHandler={this.changeCardDescriptionHandler} 
        deleteCommentHandler={this.deleteCommentHandler}
        changeCommentaryHandler={this.changeCommentaryHandler}/>;
    }

    return (
      <div className='container' style={{ fontFamily: 'Montserrat' }}>
        {firstPopUp}
        {cardPopup}
        <div>Hello {this.state.author}</div>
        <div className='title' style={{ textAlign: 'center', marginBottom: '30px' }}>Trello</div>
        <div className='column-wrapper' style={{ display: 'flex', justifyContent: 'space-around' }}>
          {columns}
        </div>
      </div>
    );
  }
}

export default App;
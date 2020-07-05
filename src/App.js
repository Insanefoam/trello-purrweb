import React from 'react';
import Column from './Column';
import LoginForm from './LoginForm';
import CardPopup from './CardPopup';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          name: 'TODO',
          cards: [{
            name: 'Watch something',
            comments: ['Ayy lmao', 'Some comment']
          },
          {
            name: 'Eat something',
            comments: ['Ayy lmao', 'Some comment']
          }
          ]
        },
        {
          name: 'In Progress',
          cards: [{
            name: 'Watch something',
            comments: ['Ayy lmao', 'Some comment']
          },
          {
            name: 'Eat something',
            comments: ['Ayy lmao', 'Some comment']
          }
          ]
        },
        {
          name: 'Testing',
          cards: [{
            name: 'Watch something',
            comments: ['Ayy lmao', 'Some comment']
          },
          {
            name: 'Eat something',
            comments: ['Ayy lmao', 'Some comment']
          }
          ]
        },
        {
          name: 'Done',
          cards: [{
            name: 'Watch something',
            comments: ['Ayy lmao', 'Some comment']
          },
          {
            name: 'Eat something',
            comments: ['Ayy lmao', 'Some comment']
          }
          ]
        }
      ],
      newCardName: [],
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
  }

  //TODO: addNewCardClickHandler

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
    let newCardName = [...this.state.newCardName];
    newCardName[index] = event.target.value;
    this.setState({
      newCardName
    })
  }


  addNewCardClickHandler(index, event) {
    let newCard = {
      name: this.state.newCardName[index],
      comments: []
    }
    const columns = [...this.state.columns];
    columns[index].cards.push(newCard);

    let newCardName = [...this.state.newCardName];
    newCardName[index] = '';
    this.setState({
      columns,
      newCardName
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

  render() {
    console.log(this.state.newCardName);
    const columns = this.state.columns.map((el, index) =>
      <Column name={el.name} cards={el.cards} key={index} newCardName={this.state.newCardName[index]}
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
        comments={this.state.columns[this.state.clickedColumn].cards[this.state.clickedCard].comments}
        cardCloseHandler={this.cardCloseHandler}
        cardNameChangeHandler={this.cardNameChangeHandler} />;
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
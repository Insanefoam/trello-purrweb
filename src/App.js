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
          cards: ['Watch something', 'Eat something']
        },
        {
          name: 'In Progress',
          cards: ['Testing Trello', 'Testing Cards']
        },
        {
          name: 'Testing',
          cards: ['Trello', 'Cards']
        },
        {
          name: 'Done',
          cards: ['Lorem', 'ipsum']
        }
      ],
      //start: true,
      author: '',
      isCardClicked: false,
      clickedColumn: '',
      clickedCard: ''
    }
    this.submitAuthorNameHandler = this.submitAuthorNameHandler.bind(this);
    this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  submitAuthorNameHandler(event) {
    this.setState({
      start: false
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

  render() {
    const columns = this.state.columns.map((el, index) =>
      <Column name={el.name} cards={el.cards} key={index}
        cardClickHandler={this.cardClickHandler.bind(this, index)} />);

    let firstPopUp = null;
    if (this.state.start) {
      firstPopUp = <LoginForm
        submitAuthorNameHandler={this.submitAuthorNameHandler}
        changeAuthorNameHandler={this.changeAuthorNameHandler} />
    };

    let cardPopup = null;
    if (this.state.isCardClicked) {
      cardPopup = <CardPopup />
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
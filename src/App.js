import React from 'react';
import Column from './Column';
import LoginForm from './LoginForm';

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
      author: ''
    }
    this.submitAuthorNameHandler = this.submitAuthorNameHandler.bind(this);
    this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
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

  render() {
    const columns = this.state.columns.map((el, index) => <Column name={el.name} cards={el.cards} key={index} />)
    let firstPopUp = null;
    if (this.state.start) {
      firstPopUp = <LoginForm
        submitAuthorNameHandler={this.submitAuthorNameHandler}
        changeAuthorNameHandler={this.changeAuthorNameHandler} />
    };

    return (
      <div className='container' style={{ fontFamily: 'Montserrat' }}>
        {firstPopUp}
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
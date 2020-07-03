import React from 'react';
import Column from './Column';

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
      ]
    }
  }

  componentDidMount() {
    //TODO: Show Login popup
  }


  render() {
    const columns = this.state.columns.map((el, index) => <Column name={el.name} cards={el.cards}/>)
    return (
      <div className='container' style={{ fontFamily: 'Montserrat' }}>
        <div className='title' style={{ textAlign: 'center', marginBottom: '30px' }}>Trello</div>
        <div className='column-wrapper' style={{ display: 'flex', justifyContent: 'space-around' }}>
          {columns}
        </div>
      </div>
    );
  }
}
export default App;
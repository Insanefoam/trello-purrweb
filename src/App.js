import React from 'react';
import Column from './Column';

const App = () =>
  <div className='container' style={{fontFamily: 'Montserrat'}}>
    <div className='Title' style={{textAlign: 'center', marginBottom: '30px'}}>Trello</div>
    <div className='column-wrapper' style={{display: 'flex', justifyContent: 'space-around'}}>
      <Column name='TODO' />
      <Column name='In Progress' />
      <Column name='Testing' />
      <Column name='Done' />
    </div>
  </div>

export default App;
import React from 'react';
import Card from './Card'

const Column = (props) =>
    <div className='column' style={{ border: '1px solid black', padding: '20px' }}>
        <div className='column__title' style={{ marginBottom: '10px' }}>
            <input type='text' value={props.name}></input>
        </div>
        <div className='card-container'>
            <Card name='Do something' comments='5'/>
            <Card name='Do something' comments='5'/>
            <Card name='Do something' comments='5'/>
            <button>Add another card</button>
        </div>
    </div>

export default Column;
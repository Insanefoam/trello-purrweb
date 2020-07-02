import React from 'react';

const Card = (props) =>
    <div className='card' style={{border: '1px solid black', marginBottom: '15px'}}>
        {props.name}
    </div>

export default Card;
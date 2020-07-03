import React from 'react';

const Card = (props) =>
    <div className='card' style={{ border: '1px solid black', marginBottom: '15px' }}>
        <div className='card__title'>{props.name}</div>
        <div className='card__comments'>{props.comments}</div>
    </div>

export default Card;
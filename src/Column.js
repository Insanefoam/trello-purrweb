import React from 'react';
import Card from './Card'

const Column = (props) => {
    const cards = props.cards.map((el, index) =>
        <Card name={el.name} comments={el.comments.length} key={index}
            cardClickHandler={props.cardClickHandler.bind(this, index)} />);

    return (
        <div className='column' style={{ border: '1px solid black', padding: '20px' }}>
            <div className='column__title' style={{ marginBottom: '10px' }}>
                <input type='text' value={props.name} onChange={props.changeColumnTitleHandler}>
                </input>
            </div>
            <div className='card-container'>
                {cards}
                <div>
                    <input onChange={props.changeNewCardNameHandler} value={props.newCardName}>
                    </input>
                </div>
                <button onClick={props.addNewCardClickHandler}>Add another card</button>
            </div>
        </div>
    )
}

export default Column;
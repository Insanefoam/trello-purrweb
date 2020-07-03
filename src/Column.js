import React from 'react';
import Card from './Card'
import { bindElementToQueries } from '@testing-library/react';

class Column extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            cards: props.cards
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({
            name: event.value
        })
    }

    render() {
        const cards = this.state.cards.map((el, index) => <Card name={el} comments={index}/>)

        return (
            <div className='column' style={{ border: '1px solid black', padding: '20px' }}>
                <div className='column__title' style={{ marginBottom: '10px' }}>
                    <input type='text' value={this.state.name} onChange={this.changeHandler}></input>
                </div>
                <div className='card-container'>
                    {cards}
                    <button>Add another card</button>
                </div>
            </div>
        )
    }
}

export default Column;
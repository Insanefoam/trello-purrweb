import React from 'react';
import Card from './Card'

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            cards: props.cards,
            newCardName: '',
            cardClickHandler: props.cardClickHandler
        };
        this.changeColumnTitleHandler = this.changeColumnTitleHandler.bind(this);
        this.changeNewCardNameHandler = this.changeNewCardNameHandler.bind(this);
        this.addNewCardClickHandler = this.addNewCardClickHandler.bind(this);
    }

    changeColumnTitleHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    changeNewCardNameHandler(event) {
        this.setState({
            newCardName: event.target.value
        })
    }

    addNewCardClickHandler(event) {
        let newCard = this.state.newCardName;
        const cards = [...this.state.cards];
        cards.push(newCard);
        this.setState({
            newCardName: '',
            cards
        })
    }

    render() {
        const cards = this.state.cards.map((el, index) =>
            <Card name={el} comments={index} key={index}
                cardClickHandler={this.state.cardClickHandler.bind(this, index)} />);

        return (
            <div className='column' style={{ border: '1px solid black', padding: '20px' }}>
                <div className='column__title' style={{ marginBottom: '10px' }}>
                    <input type='text' value={this.state.name} onChange={this.changeColumnTitleHandler}>
                    </input>
                </div>
                <div className='card-container'>
                    {cards}
                    <div>
                        <input onChange={this.changeNewCardNameHandler} value={this.state.newCardName}>
                        </input>
                    </div>
                    <button onClick={this.addNewCardClickHandler}>Add another card</button>
                </div>
            </div>
        )
    }
}

export default Column;
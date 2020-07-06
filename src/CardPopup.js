import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const CardPopup = (props) => {
    const comments = props.comments.map((el) =>
        <div>
            <input value={el.name} style={{ width: '300px' }}></input>
            <button>Delete comment</button>
            <span>Author: {el.author}</span>
        </div>
    )
    return (
        <div style={style}>
            <button onClick={props.cardCloseHandler}>Close</button>
            <input value={props.cardName} onChange={props.cardNameChangeHandler}></input>
            <div>{props.columnName} column</div>
            <div>{props.author} Author</div>
            <button onClick={props.deleteCardHandler}>Delete</button>
            <input value={props.description} onChange={props.changeCardDescriptionHandler}></input>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {comments}
                <input></input>
                <button>Add comment</button>
            </div>
        </div>
    )
}
export default CardPopup;
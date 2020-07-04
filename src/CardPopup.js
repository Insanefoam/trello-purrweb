import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const CardPopup = (props) => {
    const comments = props.comments.map((el) => <input value={el}></input>)
    return (
        <div style={style}>
            <button onClick={props.cardCloseHandler}>Close</button>
            <input value={props.cardName}></input>
            <div>{props.columnName} column</div>
            <div>{props.author} Author</div>
            <button>Delete</button>
            <input value='Description'></input>
            <div>
                {comments}
            </div>
        </div>
    )
}
export default CardPopup;
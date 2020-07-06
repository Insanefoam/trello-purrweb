import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const CardPopup = (props) => {
    const comments = props.comments.map((el) => <input value={el} style={{width: '300px'}}></input>)
    return (
        <div style={style}>
            <button onClick={props.cardCloseHandler}>Close</button>
            <input value={props.cardName} onChange={props.cardNameChangeHandler}></input>
            <div>{props.columnName} column</div>
            <div>{props.author} Author</div>
            <button>Delete</button>
            <input value={props.description}></input>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {comments}
            </div>
        </div>
    )
}
export default CardPopup;
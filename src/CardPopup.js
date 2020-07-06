import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const CardPopup = (props) => {
    const comments = props.comments.map((el, index) =>
        <div>
            <input value={el.name} style={{ width: '300px' }}
                onChange={props.changeCommentaryHandler.bind(this, index)}></input>
            <button onClick={props.deleteCommentHandler.bind(this, index)}>
                Delete comment
            </button>
            <span>Author: {el.author}</span>
        </div>
    );

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
                <input onChange={props.changeNewCommentaryHandler} value={props.newComment}></input>
                <button onClick={props.addNewCommentaryHandler}>Add comment</button>
            </div>
        </div>
    )
}
export default CardPopup;
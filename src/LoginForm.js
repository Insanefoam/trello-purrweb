import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const LoginForm = (props) =>
    <div style={style}>
        <div>Enter your name:</div>
        <input type='text' onChange={props.changeAuthorNameHandler}></input>
        <button onClick={props.submitAuthorNameHandler}>Submit</button>
    </div>

export default LoginForm;
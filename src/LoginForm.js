import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

const LoginForm = ({ changeAuthorNameHandler, submitAuthorNameHandler }) => (
  <div style={style}>
    <div>Enter your name:</div>
    <input type="text" onChange={changeAuthorNameHandler} />
    <button onClick={submitAuthorNameHandler}>Submit</button>
  </div>
);

export default LoginForm;

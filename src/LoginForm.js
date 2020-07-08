import React, { useState } from 'react';
import PropsType from 'prop-types';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
};

export default function LoginForm({ submitUserName }) {
  const [userName, setUserName] = useState('');

  const checkUserName = (name) => {
    if (name.length > 1) {
      submitUserName(userName);
    }
  };

  return (
    <div style={style}>
      <div>Enter your name:</div>
      <input type="text" onChange={(event) => setUserName(event.target.value)} />
      <button onClick={() => checkUserName(userName)} type="button">Submit</button>
    </div>
  );
}

LoginForm.propTypes = {
  submitUserName: PropsType.func.isRequired,
};

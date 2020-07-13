import React, { useState } from 'react';
import PropsType from 'prop-types';

export default function LoginForm({ submitUserName }) {
  const [userName, setUserName] = useState('');

  const checkUserName = (name) => {
    if (name.length) {
      submitUserName(userName);
    }
  };

  return (
    <div className="username-modal">
      <div>Enter your name:</div>
      <input type="text" onChange={(event) => setUserName(event.target.value)} />
      <button onClick={() => checkUserName(userName)} type="button">Submit</button>
    </div>
  );
}

LoginForm.propTypes = {
  submitUserName: PropsType.func.isRequired,
};

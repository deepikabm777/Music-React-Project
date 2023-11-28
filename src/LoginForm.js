import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    console.log('Username:', username);
    console.log('Password:', password);

  
    setUsername('');
    setPassword('');
  };

  return (
    <div className='LoginFormS'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" >Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={handleUsernameChange}
            className='LoginUser' 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className='LoginPass'
          />
        </div><br></br>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
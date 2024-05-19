import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../connect/api';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      alert('User registered successfully');
      history.push('/login');
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

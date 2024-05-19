import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../connect/api'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleRedditLogin = () => {
    // Placeholder for Reddit OAuth logic
    console.log('Initiate Reddit login');
    setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter login');
    setIsAuthenticated(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(username, password);
      setToken(token.push('/'));
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        </form>
        <Link to='/signup' className='btn btn-default'>
            Sign Up
        </Link>
        <div>
            <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Connect with Reddit</button>
            <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Connect with X</button>
        </div>
    </div>
  );
};

export default Login;

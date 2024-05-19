import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../connect/api'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
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
    
    <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
            <label>Username</label>
            <input type="text" className="login-form-textbox" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" className="login-form-textbox"value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        </form>
        <Link to='/signup' className='btn btn-default'>
            Sign Up
        </Link>
    </div>
  );
};

export default Login;
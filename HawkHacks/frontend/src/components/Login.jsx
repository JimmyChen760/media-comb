import React from 'react';
import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary

import { Link } from 'react-router-dom'


function Login() {
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


  const handleLogin = () => {

  }


  return (
    
<div>
  <form className='login'>
      <h1>Log In</h1>
      <label>username:</label>
      <input type="text"
          name="username"
          placeholder="username"
          className="login-form-textbox" />
      <label>password:</label>
      <input type="password" 
          name="password"
          placeholder="password"
          className="login-form-textbox" />
      <input type="password" 
          name="password"
          placeholder="re-enter password"
          className="login-form-textbox" />
      
        <div>
        <button className='sign-up-btn' onClick={handleLogin}>Login</button>
            <p>Don't Have An Account?</p>
            <Link to='/signup' className='btn btn-default'>
                Sign Up
            </Link>
        </div>
    </form>
    <div>
      <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Connect with Reddit</button>
      <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Connect with X</button>
    </div>
</div>

    
    
  );
}

export default Login;

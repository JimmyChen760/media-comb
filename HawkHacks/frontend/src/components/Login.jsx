import React from 'react';
import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary

import { Link } from 'react-router-dom'


function Login() {
  const handleRedditLogin = () => {
    // Placeholder for Reddit OAuth logic
    console.log('Initiate Reddit login');
    window.location='http://localhost:5000/reddit';
    setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter login');
    window.location='http://localhost:5000/twitter';
    setIsAuthenticated(true);
  };

  const handleLinkedinLogin = () => {
    // Placeholder for Linkedin OAuth logic
    console.log('Initiate Linkedin login');
    window.location='http://localhost:5000/linkedin';
    setIsAuthenticated(true);
  }
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
      <button id = "linkedin-button" className = "login-button" onClick={handleLinkedinLogin}>Connect with Linkedin</button>
    </div>
</div>

    
    
  );
}

export default Login;

import React from 'react';
import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary

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


  return (
    
    <div>
<form className='login'>
    <h1>Create an Account!</h1>
    <label for="username">username:</label>
    <input type="text"
        name="username"
        placeholder="username"
        className="login-form-textbox" />
    <label for="password">password:</label>
    <input type="password" 
        name="password"
        placeholder="password"
        className="login-form-textbox" />
    <input type="password" 
        name="password"
        placeholder="re-enter password"
        className="login-form-textbox" />
    
      <div>
      </div>
  </form>
    <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Connect with Reddit</button>
    <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Connect with X</button>
    </div>
    
    
  );
}

export default Login;

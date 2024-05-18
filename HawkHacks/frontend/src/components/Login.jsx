import React from 'react';

// import '..../.../../.App.css';
// import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary

import { Link } from 'react-router-dom'


function Login() {
  
  const handleLogin = () => {

  }


  return (
    
  <div className="login">
    <form className='login-form'>
        <h1>Log In</h1>
        <label>Username:</label>
        <input type="text"
            name="username"
            placeholder="username"
            className="login-form-textbox" />
        <label>Password:</label>
        <input type="password" 
            name="password"
            placeholder="password"
            className="login-form-textbox" />
        <input type="password" 
            name="password"
            placeholder="re-enter password"
            className="login-form-textbox" />
        
          
    </form>
    <div className="login-details">
            <button className='sign-up-btn' onClick={handleLogin}>Login</button>
            <p>Don't Have An Account?</p>
            <Link to='/signup' className='btn btn-default'>
                Sign Up
            </Link>
          </div>
    
  </div>

    
    
  );
}

export default Login;

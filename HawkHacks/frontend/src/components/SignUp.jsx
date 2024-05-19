import React from 'react';
import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary
import { Link } from 'react-router-dom'

function SignUp() {
  const handleRedditLogin = () => {
    // Placeholder for Reddit OAuth logic
    console.log('Initiate Reddit Login');
    setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter Login');
    setIsAuthenticated(true);
  };
  const handleSignUp = () => {

  }


  return (
    <div>
        <form className='signup'>
        <h1>Create an Account!</h1>
            <label>username:</label>
            <input type="text"
                name="username"
                placeholder="username"
                className="signup-form-textbox" />
            <label>password:</label>
            <input type="password" 
                name="password"
                placeholder="password"
                className="signup-form-textbox" />
            <input type="password" 
                name="password"
                placeholder="re-enter password"
                className="signup-form-textbox" />
        </form>
        <div>
            <button className='sign-up-btn' onClick={handleSignUp}>Sign Up</button>
            <p>Already Have An Account?</p>
            <Link to='/login' className='btn btn-default'>
                Log In
            </Link>
        </div>
    </div>
    
  );
}

export default SignUp;

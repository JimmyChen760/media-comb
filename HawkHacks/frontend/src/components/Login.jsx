
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../connect/api'

// import '..../.../../.App.css';
// import Dashboard from './Dashboard.jsx'; // Adjust the path as necessary


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
        <Link to='/' className='login-link-'>
          <button className='sign-up-btn'>Login</button>
        </Link>
        <p>Don't Have An Account?</p>
        <Link to='/signup' className='btn btn-default'>
            Sign Up
        </Link>
      </div>
    </div>
    );
};

// function Login() {
  
  // return (  
  // <div className="login">
  //   <form className='login-form'>
  //       <h1>Log In</h1>
  //       <label>Username:</label>
  //       <input type="text"
  //           name="username"
  //           placeholder="username"
  //           className="login-form-textbox" />
  //       <label>Password:</label>
  //       <input type="password" 
  //           name="password"
  //           placeholder="password"
  //           className="login-form-textbox" />
  //       <input type="password" 
  //           name="password"
  //           placeholder="re-enter password"
  //           className="login-form-textbox" />
        
          
  //   </form>
  //   <div className="login-details">
  //     <Link to='/' className='login-link-'>
  //       <button className='sign-up-btn' onClick={handleLogin}>Login</button>
  //     </Link>
  //     <p>Don't Have An Account?</p>
  //     <Link to='/signup' className='btn btn-default'>
  //         Sign Up
  //     </Link>
  //   </div>
  // </div>
  // );
// };

export default Login;

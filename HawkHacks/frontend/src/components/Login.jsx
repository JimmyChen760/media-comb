import React from 'react';

function Login({ setIsAuthenticated }) {
  const handleRedditLogin = () => {
    // Placeholder for Facebook/Instagram OAuth logic
    console.log('Initiate Reddit login');
    setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter login');
    setIsAuthenticated(true);
  };

  return (
    <div className="login">
      <h2>Login to Access Your Social Media Dashboard</h2>
      <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Login with Reddit</button>
      <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Login with X</button>
    </div>
  );
}

export default Login;

import React from 'react';
import Post from './Post.jsx';


var post1 = {
  "created_at": "Wed Oct 10 20:19:24 +0000 2018",
  "id": 1050118621198921728,
  "id_str": "1050118621198921728",
  "text": "To make room for more expression, we will now count all characters, including spaces and newlines, the same.",
  "truncated": false,
  "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
  },
  "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
  "user": {
      "id": 6253282,
      "id_str": "6253282",
      "name": "Twitter API",
      "screen_name": "TwitterAPI",
      "location": "San Francisco, CA",
      "description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform.",
      "url": "https://t.co/8IkCzCDr19",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg"
  },
  "retweet_count": 284,
  "favorite_count": 503
};
function Dashboard(props) {
  const handleRedditLogin = () => {
    // Placeholder for Reddit OAuth logic
    console.log('Initiate Reddit login');
    window.location='http://localhost:5000/reddit';
    // setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter login');
    window.location='http://localhost:5000/twitter';
    // setIsAuthenticated(true);
  };

  const handleLinkedinLogin = () => {
    // Placeholder for Linkedin OAuth logic
    console.log('Initiate Linkedin login');
    window.location='http://localhost:5000/linkedin';
    // setIsAuthenticated(true);
  }
  if(!props.connectedLinkedin && !props.connectedTwitter && !props.connectedReddit){
    return (
      <div className="dashboard">
        <h2 id="dashboard-title">Dashboard</h2>
        <p>Connect your social media accounts to see your feed here</p>
        <div>
        <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Connect with Reddit</button>
        <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Connect with X</button>
        <button id = "linkedin-button" className = "login-button" onClick={handleLinkedinLogin}>Connect with Linkedin</button>
    </div>
      </div>
    );
  }
  return (
    // {!props.connectedLinkedin && <p>Connect to Linkedin</p>}
    <div className="dashboard">
      <div className = "dashboard-wall">
      <h2 id="dashboard-title">Dashboard</h2>
      <Post className = "post-box" post={post1} />
      <Post  className = "post-box" post={post1} />
      <Post  className = "post-box" post={post1} />
      </div>
      
    </div>
  );
}

export default Dashboard;

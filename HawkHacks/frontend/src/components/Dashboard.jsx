import React from 'react';
import Post from './Post.jsx';
import reddit from '../assets/reddit_logo.png';
import linkedin from '../assets/LinkedIn_logo.png';
import twitter from '../assets/twitter_logo.png';
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
    connections++;
    // setIsAuthenticated(true);
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter OAuth logic
    console.log('Initiate Twitter login');
    window.location='http://localhost:5000/twitter';
    connections++;
    // setIsAuthenticated(true);
  };

  const handleLinkedinLogin = () => {
    // Placeholder for Linkedin OAuth logic
    console.log('Initiate Linkedin login');
    window.location='http://localhost:5000/linkedin';
    connections++;
    props.setConnectedLinkedin(true);
  }
  let connections = 1;
  if(props.connectedLinkedin){
    connections+= 1;

  }
  if(props.connectedTwitter){
    connections+= 1;
  }
  if(props.connectedReddit){
    connections+= 1;
  }
    return (
      <div className="dashboard">
        <h2 id="dashboard-title">Dashboard</h2>
        <p className="dashboard-desc">
          {connections == 0 && "Connect your social media accounts to see your feed here"}
          {connections > 0 && connections < 3 && "Connect more social media accounts to grow your feed"}
        </p>
        <div className="connections">
          {!props.connectedReddit && <button id = "reddit-button" className = "login-button" onClick={handleRedditLogin}>Connect with Reddit <img src={reddit}/></button>}
          {!props.connectedTwitter && <button id = "twitter-button" className = "login-button" onClick={handleTwitterLogin}>Connect with X<img src={twitter}/></button>}
          {!props.connectedLinkedin && <button id = "linkedin-button" className = "login-button" onClick={handleLinkedinLogin}>Connect with Linkedin <img src={linkedin}/></button>}
        </div>
        {connections > 0 &&  
          <div className="posts">
            <Post className = "post-box" post={post1} />
            <Post  className = "post-box" post={post1} />
            <Post  className = "post-box" post={post1} />
        </div>}
      </div>
    );
  }
  // return (
  //   // {!props.connectedLinkedin && <p>Connect to Linkedin</p>}
    <div className="dashboard">
      <div className = "dashboard-wall">
      <h2 id="dashboard-title">Dashboard</h2>
      <Post className = "post-box" post={post1} />
      <Post  className = "post-box" post={post1} />
      <Post  className = "post-box" post={post1} />
      </div>
      
    </div>
  // );
// }

export default Dashboard;

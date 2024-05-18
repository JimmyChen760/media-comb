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
function Dashboard() {
  return (
    
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

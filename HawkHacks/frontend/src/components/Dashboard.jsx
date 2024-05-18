import React from 'react';
import Post from './Post.jsx';


function Dashboard() {
  return (
    
    <div className="dashboard">
      <div className = "dashboard-wall">
      <h2 id="dashboard-title">Dashboard</h2>
      <Post/>
      <Post/>
      <Post/>
      </div>
      
    </div>
  );
}

export default Dashboard;

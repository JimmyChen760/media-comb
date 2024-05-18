import React, { useState } from 'react';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Dashboard />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx'
import Dashboard from './components/Dashboard.jsx';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

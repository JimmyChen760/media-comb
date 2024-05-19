import React, { useState } from 'react';
import Login from './components/Login.jsx';

import SignUp from './components/SignUp.jsx'
import Dashboard from './components/Dashboard.jsx';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar.jsx'
import axios from 'axios';

axios.defaults.baseUrl = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  const [connectedLinkedin, setConnectedLinkedin] = useState(false);
  const [connectedTwitter, setConnectedTwitter] = useState(false);
  const [connectedReddit, setConnectedReddit] = useState(false);

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;

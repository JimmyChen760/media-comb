import './App.css';
import { Outlet, useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import SignUp from "./components/SignUp"



function App() {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/')
  },[])

  const [connectedLinkedin, setConnectedLinkedin] = useState(false);
  const [connectedTwitter, setConnectedTwitter] = useState(false) ;
  const [connectedReddit, setConnectedReddit] = useState(false);


  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Dashboard
          connectedLinkedin={connectedLinkedin}
          connectedTwitter={connectedTwitter}
          connectedReddit={connectedReddit}
          setConnectedLinkedin={setConnectedLinkedin}
          setConnectedTwitter={setConnectedTwitter}
          setConnectedReddit={setConnectedReddit}
        />}></Route>
      </Routes>
   </>
  );
}

export default App;
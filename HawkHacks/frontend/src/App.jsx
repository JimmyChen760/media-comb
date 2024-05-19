import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Navbar from "./components/Navbar"

function App() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('Signup')
  },[])

  return (
     <>
       <ToastContainer/>
       <main className='main'>
        <Navbar/>
            <Outlet/>
       </main>
     </>
  );
}

export default App;

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

  const [connectedLinkedin, setConnectedLinkedin] = useState(false);
  const [connectedTwitter, setConnectedTwitter] = useState(false) ;
  const [connectedReddit, setConnectedReddit] = useState(false);

  return (
  <>
    <ToastContainer/>
    <BrowserRouter>
      <NavBar/>
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
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
   </>


export default App;
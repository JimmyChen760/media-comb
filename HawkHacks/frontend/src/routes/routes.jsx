import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import UserProfile from '../components/Profile'
import Signin from '../components/Login'
import Signup from '../components/SignUp'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "profile",
                element : <UserProfile/>
            },
            {
                path : 'Login',
                element : <Signin/>
            },
            {
                path : "Signup",
                element : <Signup/>
            },
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "user-details",
                element: <Profile/>
            }
        ]
    }
])

export default router
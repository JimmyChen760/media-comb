import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    profilePic : "",
  })
  const navigate = useNavigate()


  const handleUserProfile = async() => {
    const response = await fetch('http://localhost:8080/api/user-details',{
        method : "post",
        headers : {
          "content-type" : "application/json",
          authorization : `jwt ${localStorage.getItem('token')}`
        }
    })

    const dataResponse = await response.json()
    setData(dataResponse.data)
  }

  useEffect(()=>{
    
      handleUserProfile()
    
  },[])

  const handleLogOut = ()=>{
      localStorage.clear()
      navigate("/Login")
  }

  

  return (
    <div className='h-screen-center'>
        
         <div className='profile '>
          <button className='logout-btn' onClick={handleLogOut}>Logout</button>
            
              {
                data?.profilePic ? (
                  <div>
                    <img src={data?.profilePic} className='user-profile-pic'/>
                  </div>
                ) 
                : 
                <div className='user-profile-icons'>
                </div>
              }
           
            <img src=''/>

            <h1 className='user-name'>{data?.name}</h1>
            <p className='user-email'>{data?.email}</p>
        </div>
    </div>
   
  )
}

export default UserProfile
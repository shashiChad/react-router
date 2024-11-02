import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick (){
        navigate('/home');
    }

  return (
    <div>
      Dashboard page
      <button onClick={handleClick}> 
        Move to Home page
      </button>
      <Outlet/>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

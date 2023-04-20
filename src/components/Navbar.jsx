import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: 'flex' }}>
        <li className='link' style={{ marginRight: '15px' }}>
          <NavLink to="/">Main</NavLink>
        </li>
        <li className='link' style={{ marginRight: '15px' }}>
          <NavLink to="/photos">Photos</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
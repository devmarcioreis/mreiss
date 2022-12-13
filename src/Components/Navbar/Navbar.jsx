import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">M<span>:)</span>REISS</div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <button className="button nav-button">Contato</button>
      </div>
    </div>
  )
}

export default Navbar
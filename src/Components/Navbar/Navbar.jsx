import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name"><a href="/">M<span>:)</span>REISS</a></div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li><i class="uil uil-home"></i> Home</li>
            <li><i class="uil uil-user"></i> Sobre</li>
            <li><i class="uil uil-bag"></i> Portfólio</li>
          </ul>
        </div>
        <button className="button nav-button">Currículo</button>
      </div>
    </div>
  )
}

export default Navbar
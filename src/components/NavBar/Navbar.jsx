import React from 'react';
import './Navbar.css';
import Mlogo from '../../assets/llogo.png';
import {Link} from 'react-scroll';


function Navbar() {
  return (
    <nav className="navbar">
        <img src={Mlogo} alt="logo" className='logo' />
        <div className="desktopMene">
            <Link className='DesktopMenuListItem'>Home</Link>
            <Link className='DesktopMenuListItem'>About</Link>
            <Link className='DesktopMenuListItem'>Resume</Link>
            <Link className='DesktopMenuListItem'>Portfolio</Link>
        </div>
        <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  )
}

export default Navbar

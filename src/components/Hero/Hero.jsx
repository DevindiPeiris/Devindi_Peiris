import React from 'react';
import './Hero.css';
import Photo from '../../assets/Dew.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={Photo} alt="" className='photo'/>
        <h1>Hello, <span>I'm Devindi Peiris</span><br/> IT & Management Undergraduate from University of Moratuwa</h1>
        <p>An enthusiastic undergraduate developer committed to building user-friendly digital solutions and enhancing online experiences.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero

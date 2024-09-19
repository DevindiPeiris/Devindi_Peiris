import React from 'react'
import './About.css';
import Devindi from '../../assets/Devindi.png';
function About() {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Devindi} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>xxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx</p>
                    <p>xxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

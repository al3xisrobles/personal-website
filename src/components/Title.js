import React from 'react';
import './css/Title.css'
import Headshot from '../images/Headshot.PNG'
import Email from '../images/email.png'
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'

function Title() {
    return (
        <>
            <div class="sections">

                <img src={Headshot} alt="Headshot" className="headshot"/>

                <div class="left">
                    <h1>Alexis Robles</h1>
                    <p>Northwestern University 2025</p>
                    <div className="icons">
                      <a href="https://www.linkedin.com/in/alexisdrobles/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" className="linkedin"/>
                      </a>
                      <a href="https://github.com/al3xisrobles" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Github" className="github"/>
                      </a>
                    </div>
                </div>
                <div class="right">
                    <h3>About Me</h3>
                    <p>Software engineer, traveler, graphic designer, and musician from Boston, MA.</p>
                    <br/>
                    <p className="email-me-text">email me</p>
                    <a href="mailto:alexis.robles49@gmail.com" target="_blank" rel="noreferrer">
                        <img src={Email} alt="Email" className="email"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Title;

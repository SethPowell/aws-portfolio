import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter"
// import Typist from 'react-typist'

export default function About(){
    return(
        <div className="about-app">


            <div className="nav-wrapper">
                <div className="nav-buttons-wrapper">
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>


            <div className="about-wrapper">
                <div className="header-wrapper-about">
                    <div className="top-line-about" />

                    <div class="typewriter-about">
                        <h1>About</h1>
                    </div>

                    <div className="bottom-line-about" />
                </div>
                <div className="spacer" />
                <div className="photo-wrapper">
                    <img src="https://drive.google.com/uc?export=view&id=1nOaBOV0i5Fg7c0JdUvj_7GOE_gPi-W3P"></img>
                </div>
                <div className="spacer" />
                <div className="text-wrapper">
                    <p>
                        My name is Seth Powell and I graduated Bottega University's Full Stack Developer Program as of September 24th, 2021. 
                        I am currently profficient in JavaScript, Python, React, MySQL, MongoDB, Redis, HTML5, SCSS, and CSS. I am also working 
                        towards a certification in AWS. I have also been doing work in cyber security measures such as SOC compliance and 2 way 
                        encryption practices. I am currently looking for a job in network security and optimization, or similar fields to develop 
                        more experience and more robust credentials for this career.
                    </p>
                </div>
            </div>

        </div>
    )
}
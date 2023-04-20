import React from "react"
import {navigate} from "hookrouter"
// import Typist from "react-typist"

export default function Resume(){
    return(
        <div className="resume-app">
            
            <div className="nav-wrapper">
                <div className="nav-buttons-wrapper">
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>

            <div className="header-wrapper-resume">
                <div className='top-line-resume' />
                    {/* <Typist cursor={{show: false}} avgTypingDelay={100}>
                        <h1 className="typist-header">Résumé</h1>
                    </Typist> */}
                <div className='bottom-line-resume' />
            </div>

            <div className="resume-wrapper">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTChz-Nh5It4XOK84IK5bi64Lo89or8DQdJ7WildwV83pAkLrD1h2tsMnDoIdjDnQ/pub?embedded=true" height="700px" width="600px"/>
                <a href="https://docs.google.com/document/d/1nG0WenHVQ6cYZzFXgBDbfM5T9Qwd-py7/edit?usp=sharing&ouid=114577462020167596253&rtpof=true&sd=true" target="_blank" download="seth_powell_resume">View Document</a>
            </div>
        </div>
    )
} 
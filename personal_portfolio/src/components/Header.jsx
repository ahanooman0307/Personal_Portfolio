import React from "react";
import '../styles/Header.css'

const Header = () =>{
    return( 
    <div className="header">
        <div className="left">Akshay Hanooman</div>
        <div className="right">
            <button className="about">About</button>
            <button className="skills_tab">Skills</button>
            <button className="projects">Projects</button>
            <button className="contact">Contact</button>
        </div>
    </div>
    )
}

export default Header;
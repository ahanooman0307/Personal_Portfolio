import React from "react";
import '../styles/Header.css'

const Header = () =>{
    return( 
    <div className="header">
        <div className="left">Akshay Hanooman</div>
        <div className="right">
            <a href="#about_section" >About</a>
            <a href="#skill_section" >Skills</a>
            <a href="#project_section" >Projects</a>
            <a href="#contact_section" >Contact</a>
        </div>
    </div>
    )
}

export default Header;
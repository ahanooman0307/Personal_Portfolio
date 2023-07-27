import React from "react";
import '../styles/Projects.css'


const Projects =() =>{
    return(
        <div className="projectContainer">
            <div className="title">Projects</div>
            <div className="projects">
                <div className="project">
                <img src={require('../utils/images/weather.png')} />      </div>

                <div className="project">BlackJack</div>
                <div className="project">Social Media Platform</div>
                <div className="project">Tic Tac Toe</div>
            </div>
        </div>
    )
}

export default Projects;

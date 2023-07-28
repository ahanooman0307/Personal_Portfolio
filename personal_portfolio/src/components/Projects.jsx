import React from "react";
import '../styles/Projects.css'


const Projects =() =>{
    return(
        <div id = "project_section" className="projectContainer">
            <div className="title">Projects</div>
            <div className="projects">
                <div className="project">
                <img src={require('../utils/images/weather.png')} />
                </div>

                <div className="project">
                <img src={require('../utils/images/blackjack.png')} />
                </div>

                <div className="project">
                <img src={require('../utils/images/smp.png')} />

                </div>

                <div className="project">
                <img src={require('../utils/images/tic-tac-toe.png')} />
                </div>

            </div>
        </div>
    )
}

export default Projects;

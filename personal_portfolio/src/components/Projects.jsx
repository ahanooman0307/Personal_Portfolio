import React from "react";
import '../styles/Projects.css'


const Projects =() =>{
    return(
        <div id = "project_section" className="projectContainer">
            <div className="title">Projects</div>
            <div className="projects">
                <div className="project">
                <img src={require('../utils/images/weather.png')} />
                <div className="overlay">This is a weather app that I created for my Web Development class project. I used React and axios to create this project
                    <div className="innerContainer">
                    <a href="https://github.com/ahanooman0307/weatherapp">Code</a>
                    <a href="https://ahanooman0307.github.io/weatherapp">Demo</a>
                    </div>
                    
                 </div>

                </div>

                <div className="project">
                <img src={require('../utils/images/blackjack.png')} />
                <div className="overlay">This is a blackjack game that I made during my Web Development class using ExpressJS and React.
                <div className="innerContainer">
                    <a href="https://github.com/ahanooman0307/Blackjack">Code</a>
                    <a href="https://ahanooman0307.github.io/Blackjack/">Demo</a>
                    </div></div>

                </div>

                <div className="project">
                <img src={require('../utils/images/smp.png')} />
                <div className="overlay">This is a Social Media App that I made during my Data Structures and Algorithms class. I used many data structures like Linked Lists, Queues, Stacks, etc. I also used many sorting algorithms like bubble sort, etc.
                <div className="innerContainer">
                    <a href="https://github.com/ahanooman0307/Social_Media_cplusplus">Code</a>
                    {/* <a href="">Demo</a> */}
                    </div></div>

                </div>

                <div className="project">
                <img src={require('../utils/images/tic-tac-toe.png')} />
                <div className="overlay">This is a Tic-Tac-Toe game that I made on my personal time using HTML, CSS, and JS. This game has a PVP mode and a computer mode to play with an AI that I created.
                <div className="innerContainer">
                    <a href="https://github.com/ahanooman0307/Tic-Tac-Toe">Code</a>
                    <a href="https://ahanooman0307.github.io/Tic-Tac-Toe/">Demo</a>
                    </div></div>

                </div>

            </div>
        </div>
    )
}

export default Projects;

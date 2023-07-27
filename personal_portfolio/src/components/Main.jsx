import React, {useState} from 'react'
import Introduction from './Introduction';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';

const Main = () =>{
    return( 
<div>
    <Header></Header>
    <Introduction></Introduction>
    <Skills></Skills>
    <Projects></Projects>
    </div>

    )
};

export default Main;
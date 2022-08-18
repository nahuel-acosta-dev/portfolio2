import React from 'react';
import Home from '../sections/Home';
import Bar from '../sections/Bar';
import Skills from '../sections/Skills';
import Curriculum from '../sections/Curriculum';
import Projects from '../sections/Projects';
import CustomNavbar from '../components/navbar/CustomNavbar';

const Portfolio = () => {
    return(
        <>
            <CustomNavbar />

            <main>
                <Home/>
                <Bar/>
                <Skills/>
                <Curriculum/>
                <Projects/>
            </main>
        </>
    )
}

export default Portfolio;

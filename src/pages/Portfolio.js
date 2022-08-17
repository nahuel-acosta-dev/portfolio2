import React from 'react';
import Home from '../sections/Home';
import Bar from '../sections/Bar';
import Skills from '../sections/Skills';
import CustomNavbar from '../components/navbar/CustomNavbar';

const Portfolio = () => {
    return(
        <>
            <CustomNavbar />

            <main>
                <Home/>
                <Bar/>
                <Skills/>
            </main>
        </>
    )
}

export default Portfolio;

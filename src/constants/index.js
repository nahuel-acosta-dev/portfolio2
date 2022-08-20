/* eslint-disable no-multi-str */
//Icons
import Javascript from '../img/icons/javascript.svg';
import Bootstrap from '../img/icons/bootstrap.svg';
import React from '../img/icons/react.svg';
import Django from '../img/icons/django.svg';
import Python from '../img/icons/python.svg';
import MySql from '../img/icons/mysql.svg';

// Projects
import SixLives from '../img/sixlives.png';
import SixLives2 from '../img/sixlives2.png';
import SixLives3 from '../img/sixlives3.png';

import Simply from '../img/simply.png';
import Simply2 from '../img/simply2.png';


export const iconsFrontEnd = [
    {
        img: Javascript,
        name: 'Javascript',
        width: "40"
    },
    {
        img: Bootstrap,
        name: 'Bootstrap',
        width: "40"
    },
    {
        img: React,
        name: 'React',
        width: "40"
    }
]

export const iconsBackEnd = [
    {
        img: Python,
        name: 'Python',
        width: "40"
    },
    {
        img: Django,
        name: 'Django',
        width: "40"
    },
    {
        img: MySql,
        name: 'MySql',
        width: "40"
    }
]

export const certificates = [
    {
        name: 'CS50',
        date: '2021 - 2022',
        title: 'CS50 Programación Web con JavaScript y Python ',
        id: 'cs50',
        items: [
            {
                description: "Curso dictado por la universidad Harvard, en las que pude \
                desarrollar mucho mejor mi pensamiento algorítmico y a desarrollar aplicaciones web, desde el Back-End con Python y Django, hasta el Front-End con  JavaScript y React."
            },
        ]
    },
    {
        name: 'UTN',
        date: '2021 - 2022',
        title: 'UTN Desarrollo Web Full Stack',
        id: 'utn',
        items: [
            {
                description: "Aprendi a desarrollar aplicaciones web con un framwork css como bootstrap, \
                y mejore mis conocimientos en Back-End implementado una base de datos MySql."
            },
        ]
    },
    {
        name: 'Codo a Codo',
        date: '2022 - Actualidad',
        title: 'Desarrollo Web con Java',
        id: 'codo',
        items: [
            {
                description: "Aun sigo cursandolo, Me decidi a entrar a este curso para profundizar \
                mis conocimientos en el back-end."
            },
            {
                description: "Además de seguir trabajando mis aplicaciones con Python y Django,  \
                decidí sumar a Java para poder tener un abanico de opciones mucho más grande a la hora de \
                elegir como desarrollador la lógica que va por detrás de mis aplicaciones web."
            },
        ]
    },
    {
        name: 'ONE',
        date: '2022 - Actualidad',
        title: 'ONE Oracle Next Education',
        id: 'one',
        items: [
            {
                description: "También sigo cursándolo cerca de terminarlo, \
                aprendí mucho. Arquitectura del software y muchas buenas prácticas, \
                que fueron fundaméntales para poder organizar mis proyectos."
            }
        ]
    }
]

export const myProjects = [
    {
        subtitle: "Juego del ahorcado",
        title: "Demo SixLives",
        paragraph1: "SixLives es un juego del ahorcado en que podrás registrarte, \
        Jugar partidas rápidas, crear tus propias palabras e invitar a otras personas en tiempo real, \
        online y de manera local.",
        paragraph2: "Esta aplicación fue desarrollada con React, Sass, Bootstrap y \
        Redux para el Front-End. Y con Django Rest Framework, MySQL y JSON Web Tokens para el Back-End.",
        images: [SixLives, SixLives2, SixLives3],
        github: "https://github.com/nahuel43038/one-alura-challenge2.io",
        url: "https://deploy-frontend-sixlives.vercel.app/app/home",
        variant:"dark"
    },
    {
        subtitle: "Tienda",
        title: "Simply Neon",
        paragraph1: "Symply Neón es la interfaz de una tienda de Neón la cual \
        desarrolle para mejorar mis conocimientos en el Front-End.",
        paragraph2: "Esta aplicación fue desarrollada con HTML/CSS, JavaScript y Bootstrap.",
        images: [Simply, Simply2],
        github: "https://github.com/nahuel43038/OnePage-SimplyNeon.io",
        url: "https://nahuel43038.github.io/OnePage-SimplyNeon.io/",
        variant:"light"
    }
]
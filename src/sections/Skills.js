import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {iconsFrontEnd, iconsBackEnd} from '../constants/index';

const Skills = () =>{

    return(
        <section className="skills" id="about_mi">
            <Container>
                <Row>
                    <Col xs={12} md>
                        <p className="title__secondary">
                            <span>0.2 </span> MIRA QUIEN SOY.
                        </p>
                        <h2 className="title__primary">
                            Sobre Mi
                        </h2>
                        <p>¡Hola! Mi nombre es Nahuel, me gusta todo lo que tenga que ver con la 
                            tecnología y que implique resolver problemas con ella. A mediados de
                            2020 debido a que realizaba varias tareas con mi computadora, decidí 
                            profundizar más acerca de mis conocimientos informáticos y me aventé a 
                            aprender programación. Luego de 2 meses aprendiendo a programar me 
                            incline por la rama del  desarrollo web. Aunque mi enfoque es 
                            principalmente en el desarrollo  web Back-End, También tengo algunos 
                            conocimientos en el Front-End. Además de las tecnologías principales que 
                            menciono en las tarjetas de abajo, también tengo conocimiento en otras 
                            herramientas y lenguajes como GitHub, Git, HTML, CSS, Sass y actualmente 
                            me encuentro aprendiendo  un poco de Docker.
                        </p>
                    </Col>
                    <Col xs={12} md>
                        <article>
                            <Row className="skills__dev justify-content-center align-content-center">
                                {
                                    iconsFrontEnd.map((iconFrontEnd, i) => (
                                        <Col key={i} className="d-flex justify-content-center">
                                            <div className="text-center">
                                                <img
                                                src={iconFrontEnd.img}
                                                alt={`icon ${iconFrontEnd.name}`}
                                                width={iconFrontEnd.width}
                                                />{' '}
                                                <br/>
                                                <p>{iconFrontEnd.name}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </article>
                        <article>
                            <Row className="skills__dev justify-content-center align-content-center">
                                {
                                    iconsBackEnd.map((iconBackEnd, i) => (
                                        <Col key={i} className="d-flex justify-content-center">
                                            <div className="text-center">
                                                <img
                                                src={iconBackEnd.img}
                                                alt={`icon ${iconBackEnd.name}`}
                                                width={iconBackEnd.width}
                                                />{' '}
                                                <br/>
                                                <p>{iconBackEnd.name}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}

export default Skills;
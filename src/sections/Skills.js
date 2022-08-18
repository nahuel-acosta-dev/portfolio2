import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {iconsFrontEnd, iconsBackEnd} from '../constants/index';

const Skills = () =>{

    return(
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                        <span>Lorem ipsum is placeholder text commonly used</span>
                        <h2 className="title__primary">
                            Sobre Mi
                        </h2>
                        <p>¡Hola! Mi nombre es Brittany y disfruto creando cosas que viven en Internet. Mi interés en el desarrollo web comenzó en 2012 cuando decidí intentar editar temas personalizados de Tumblr, ¡resulta que hackear juntos un botón de reblog personalizado me enseñó mucho sobre HTML y CSS!
                            Avance rápido hasta hoy, y he tenido el privilegio de trabajar en una agencia de publicidad, una start-up, una gran corporacióny un estudio de diseño dirigido por estudiantes. Mi enfoque principal en estos días es construir productos accesibles e inclusivos y experiencias digitales en Upstatement para una variedad de clientes.
                            También recientemente lanzó un curso que cubre todo lo que necesita para crear una aplicación web con la API de Spotify utilizando Node & React.
                            Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                        </p>
                    </Col>
                    <Col>
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
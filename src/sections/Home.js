import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../img/astronauta.png';

const Home = () => {

    return(
        <section className="home" id="home">
            <Container>
                <Row>
                    <Col xs={{ order: 2 }} sm={{order: 2, span: 12}} md={{order: 2}} lg>
                        <Row>
                            <Col>
                            <span className="home__subtitle">Hola, mi nombre es</span>
                            <h1 className="title__primary home__title">
                               <span>Nahuel Acosta.</span>
                               <p>Programador Web</p>
                            </h1>
                            <p> Si buscas un desarrollador paciente que gusta de poner su máximo 
                                esfuerzo para que cada sitio web salga de la mejor manera posible, 
                                no dudes en contactarte conmigo a través de alguno de los siguientes 
                                medios, además de poder enviarme un mensaje mediante WhatsApp o Telegram.
                            </p>
                            <Row className="home__icons">
                                <Col>
                                    <div className="home__contIcon">
                                        <a href="mailto:brianacostanahuel2000@gmail.com" rel="noreferrer" 
                                        alt="icon" target="_blank">
                                            <i className="bi bi-envelope-fill"></i>
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home__contIcon">
                                        <a href="https://github.com/nahuel43038" 
                                        rel="noreferrer" alt="icon"
                                        target="_blank"
                                        >
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                <div className="home__contIcon">
                                    <a href="https://www.linkedin.com/in/nahuel-acosta-2b5423188" 
                                    rel="noreferrer" alt="icon" target="_blank">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                                </Col>
                                <Col>
                                <div className="home__contIcon">
                                    <a href="tel:+541164729851" rel="noreferrer" alt="icon" target="_blank">
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                </div>
                                </Col>
                            </Row>
                            </Col>
                            <Col xs={1} sm={2}/>
                        </Row>
                    </Col>
                    <Col xs={{ order: 1, span: 4 }} sm={{order:1,span:12}} md={{order: 1, span: 4 }} lg={{order:2, span:4}}>
                        {/*imagen a cambiar en lo posible*/}
                        <div className="home__img">
                            <img 
                                src={Logo}
                                alt="imagen logo"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
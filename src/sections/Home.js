import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../img/astronauta.png';

const Home = () => {

    return(
        <section className="home">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                            <span className="home__subtitle">Hola, my nombre es</span>
                            <h1 className="title__primary">
                               <span>Nahuel Acosta.</span>
                               <p>Construyo cosas para la web</p>
                            </h1>
                            <p>Soy un ingeniero de software especializado en la construcción 
                                (y ocasionalmente el diseño) de experiencias digitales 
                                excepcionales. Actualmente, estoy enfocado en la construcción de 
                                productos accesibles y centrados en el ser humano en Upstatement.</p>
                            <Row className="home__icons">
                                <Col>
                                    <div className="home__contIcon">
                                        <a href="#" rel="noreferrer" alt="icon">
                                            <i class="bi bi-envelope-fill"></i>
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home__contIcon">
                                        <a href="#" rel="noreferrer" alt="icon">
                                            <i class="bi bi-github"></i>
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                <div className="home__contIcon">
                                    <a href="#" rel="noreferrer" alt="icon">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </div>
                                </Col>
                                <Col>
                                <div className="home__contIcon">
                                    <a href="#" rel="noreferrer" alt="icon">
                                        <i class="bi bi-whatsapp"></i>
                                    </a>
                                </div>
                                </Col>
                            </Row>
                            </Col>
                            <Col xs={2}/>
                        </Row>
                    </Col>
                    <Col xs={4}>
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
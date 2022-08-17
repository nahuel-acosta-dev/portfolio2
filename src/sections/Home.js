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
                            <span>Hola, my nombre es</span>
                            <h1 className="title__primary">
                               Brian Nahuel Acosta
                               <p>Construyo cosas para la web</p>
                            </h1>
                            <p>Soy un ingeniero de software especializado en la construcción 
                                (y ocasionalmente el diseño) de experiencias digitales 
                                excepcionales. Actualmente, estoy enfocado en la construcción de 
                                productos accesibles y centrados en el ser humano en Upstatement.</p>
                            </Col>
                            <Col xs={2}/>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        {/*imagen a cambiar en lo posible*/}
                        <div className="home__img"></div>
                        <img 
                            src={Logo}
                            alt="imagen logo"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
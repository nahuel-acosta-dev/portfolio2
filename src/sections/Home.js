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
                            <span>Lorem ipsum is placeholder text commonly used</span>
                            <h1 className="title__primary">
                                Lorem ipsum is placeholder text commonly
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex 
                                ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
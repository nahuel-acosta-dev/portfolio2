import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../img/astronauta.png';

const Home = () => {

    return(
        <section className="home">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <span>Lorem ipsum is placeholder text commonly used</span>
                            <h1 className="title__primary">
                                Lorem ipsum is placeholder text commonly
                            </h1>
                        </div>
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
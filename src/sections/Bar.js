import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'

const Bar = () => {


    return(
        <section className="bar d-flex height-100 justify-content-center align-items-center align-content-center">
            <Container>
                <Row className="text-sm-center">
                    <Col xs={12} sm className="title__secondary bar__text">
                    <span><i className="bi bi-bookmark-star"></i></span> + ENTUSIASTA
                    </Col>
                    <Col xs={12} sm className="title__secondary bar__text">
                    <span><i className="bi bi-journal-text"></i></span> + GANAS DE APRENDER
                    </Col>
                    <Col xs={12} sm className="title__secondary bar__text">
                    <span><i className="bi bi-lightning-charge"></i></span> + DEDICACION
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Bar;
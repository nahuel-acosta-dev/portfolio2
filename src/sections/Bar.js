import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'

const Bar = () => {


    return(
        <section className="bar d-flex height-100 justify-content-center align-items-center align-content-center">
            <Container>
                <Row>
                    <Col>3800+ ENTUSIASMO</Col>
                    <Col>230+ GANAS DE APRENDER</Col>
                    <Col>$230M+ DEDICACION</Col>
                    <Col>$230M+ ESFUERZO</Col>
                </Row>
            </Container>
        </section>
    )
}

export default Bar;
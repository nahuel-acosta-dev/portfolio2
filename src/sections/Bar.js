import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'

const Bar = () => {


    return(
        <section className="bar">
            <Container>
                <Row>
                    <Col>3800+ USER ACTIVE</Col>
                    <Col>230+ TRUSTED BY COMPANY</Col>
                    <Col>$230M+ TRANSACTION</Col>
                </Row>
            </Container>
        </section>
    )
}

export default Bar;
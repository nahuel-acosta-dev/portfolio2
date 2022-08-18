import React, {useState} from 'react';
import {certificates} from '../constants/index';
import {Col, Container, Row, Button} from 'react-bootstrap';

const Curriculum = () => {
    const [activatedItem, setActivatedItem] = useState('cs50');

    return(
        <section className="curriculum">
            <Container>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <h3 className="title__primary">
                            Algunos cursos que eh realizado
                        </h3>
                        <article>
                            <Row className="curriculum__courses">
                                <Col xs={3} className="curriculum__names">
                                    {
                                        certificates.map((certificate, i) => (
                                            <Button key={i} onClick={() => setActivatedItem(certificate.id)}
                                            variant="dark" 
                                            className="curriculum__name">
                                                <span>{certificate.name}</span>
                                            </Button>
                                            )
                                        )
                                    }
                                </Col>
                                <Col>
                                    { 
                                        certificates.map((certificate, i) => (
                                            certificate.id === activatedItem &&
                                            (<div key={i}>
                                                <p>{certificate.title}</p>
                                                <span>{certificate.date}</span>
                                                {
                                                    certificate.items.map((item, i) =>(
                                                        <div key={`item${i}`}>
                                                            {item.description}
                                                        </div>
                                                    ))
                                                }
                                            </div>)
                                        ))
                                    }
                                </Col>
                            </Row>
                        </article>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Curriculum;
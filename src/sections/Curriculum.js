import React, {useState} from 'react';
import {certificates} from '../constants/index';
import {Col, Container, Row, Button} from 'react-bootstrap';

const Curriculum = () => {
    const [activatedItem, setActivatedItem] = useState('cs50');

    return(
        <section className="curriculum">
            <Container>
                <Row>
                    <Col xs={3}></Col>
                    <Col>
                    <Row>
                        <Col xs={9}><h3 className="title__secondary">
                          <span>
                            0.2 </span>  
                             Algunos cursos que eh realizado
                        </h3></Col>
                        <Col><hr/></Col>
                    </Row>
                        
                        <article>
                            <Row className="curriculum__courses">
                                <Col xs={3} className="curriculum__names">
                                    {
                                        certificates.map((certificate, i) => (
                                            <Button key={i} 
                                            onClick={() => setActivatedItem(certificate.id)}
                                            variant="dark" 
                                            className={`curriculum__name ${
                                                certificate.id === activatedItem ?
                                                'curriculum__active'
                                                :
                                                ''}`}>
                                                {certificate.name}
                                            </Button>
                                            )
                                        )
                                    }
                                </Col>
                                <Col className="curriculum__description">
                                    { 
                                        certificates.map((certificate, i) => (
                                            certificate.id === activatedItem &&
                                            (<div key={i}>
                                                <p>{certificate.title}</p>
                                                <span>{certificate.date}</span>
                                                {
                                                    certificate.items.map((item, i) =>(
                                                        <div key={`item${i}`} className="curriculum__item">
                                                            <Row>
                                                                <Col xs={1}><i class="bi bi-caret-right-fill curriculum__fill"></i></Col>
                                                                <Col>{item.description}</Col>
                                                            </Row>
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
                    <Col xs={3}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Curriculum;
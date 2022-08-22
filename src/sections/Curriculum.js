import React, {useState} from 'react';
import {certificates} from '../constants/index';
import {Col, Container, Row, Button} from 'react-bootstrap';
import cv from '../nahuel__acosta__cv.pdf';
const Curriculum = () => {
    const [activatedItem, setActivatedItem] = useState('cs50');

    return(
        <section className="curriculum" id="cv">
            <Container>
                <Row>
                    <p className="title__secondary">
                            <span>0.3 </span> ALGUNAS DE MIS CERTIFICACIONES
                    </p>
                    <Col xs={1} md={2}></Col>
                    <Col>
                    
                    <Row>
                        <Col xs={9}>
                        
                        </Col>
                        <Col><hr/></Col>
                    </Row>
                        
                        <article>
                            <Row className="curriculum__courses">
                                <Col xs={3} md={2} className="curriculum__names">
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
                                                                <Col xs={1}><i className="bi bi-caret-right-fill curriculum__fill"></i></Col>
                                                                <Col>{item.description}</Col>
                                                            </Row>
                                                        </div>
                                                    ))
                                                }
                                            </div>)
                                        ))
                                    }
                                    <Row>
                                        <Col xs={1}/>
                                        <Col>
                                            <a href={cv} alt="curriculum de nahuel acosta" 
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-info text-decoration-none
                                            curriculum__cv" target="_blank"
                                            >
                                                Descargar CV <i className="bi bi-cloud-arrow-down"></i>
                                            </a>
                                        </Col>
                                        <Col xs={1}/>
                                    </Row>
                                </Col>
                            </Row>
                        </article>
                    </Col>
                    <Col xs={1} md={2}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Curriculum;
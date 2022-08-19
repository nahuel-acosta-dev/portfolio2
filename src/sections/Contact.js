import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Avatar from '../img/avatar.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Contact = () =>{

    return(
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col lg={1}/>
                    <Col>
                        <Row>
                            <Col xs={12} md>
                                <Row>
                                    <Col xs={1} md={3} lg={1}></Col>
                                    <Col>
                                    <div className="contact__cont"> 
                                        <div className="text-center">
                                            <p className="contact__text">Nahuel Acosta</p>
                                            <span className="contact__text">Disponible</span> 
                                        </div>    
                                        <div className="contact__avatar">
                                            <img src={Avatar} alt="" rel="noreferrer"/>
                                        </div>
                                        <div className="contact__text text-center">Desarrollador Web Full-Stack</div>
                                        <Row className="contact__icons">
                                            <Col className="d-flex align-items-end justify-content-center">
                                                <a href="mailto:brianacostanahuel2000@gmail.com" 
                                                className="text-decoration-none"
                                                alt="icon linkedin"
                                                rel="noreferrer">
                                                    <i class="bi bi-envelope-fill"></i>
                                                </a>
                                            </Col>
                                            <Col className="d-flex align-items-end justify-content-center">
                                                <a href="tel:+541164729851" 
                                                className="text-decoration-none"
                                                alt="icon linkedin"
                                                rel="noreferrer"
                                                >
                                                    <i class="bi bi-whatsapp"></i>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                    <Col xs={1} md={3} lg={2} xl={3}></Col>
                                </Row>
                            </Col>
                            <Col className="contact__form" xs={12} lg>
                                <p className="contact__text">Ponerse en Contacto</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control className="contact__input" type="text" 
                                        placeholder="Ingresa tu Nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="contact__input" type="email" 
                                        placeholder="Ingresa tu Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control className="contact__input" as="textarea" rows={3} 
                                        placeholder="Ingresa un Mensaje" />
                                    </Form.Group>
                                        <Button className="contact__btn" variant="dark" size="lg" type="submit">
                                            <span>Enviar</span>
                                        </Button>
                                    </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1}/>
                </Row>
            </Container>
        </section>
    )

}

export default Contact;
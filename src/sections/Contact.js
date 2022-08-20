import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Avatar from '../img/avatar.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const [show, setShow] = useState(true);

    const sendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_8hx1ysg', 'template_plcmsep', e.target, 'RUPS8-x410P5DMfse')
        .then(response => {
            console.log(response)
            setShow('successful');
        })
        .catch(error => {
            console.log(error)
            setShow('err');
        })
    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col lg={1}/>
                    <Col>
                        <p className="title__secondary">
                                <span>0.5 </span> ELIGE COMO CONTACTARME
                        </p>
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
                                                    <i className="bi bi-envelope-fill"></i>
                                                </a>
                                            </Col>
                                            <Col className="d-flex align-items-end justify-content-center">
                                                <a href="tel:+541164729851" 
                                                className="text-decoration-none"
                                                alt="icon linkedin"
                                                rel="noreferrer"
                                                >
                                                    <i className="bi bi-whatsapp"></i>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                    <Col xs={1} md={3} lg={2} xl={3}></Col>
                                </Row>
                            </Col>
                            <Col className="contact__form" xs={12} lg>
                                {show &&
                                    <Alert className="contact__alert text-center" variant={
                                        `${show === 'successful' ? "info" : 'danger'}`}>
                                        <span>
                                            {show === 'successful' ?
                                            (<>Gracias por su mensaje! contenstare a la brevedad.</>)
                                            :
                                            (<>
                                                Oh! lo siento aparentemente ocurrio un error al enviar el mensaje.
                                                por favor trate de contactarme a travez de las otras formas de contacto
                                                que deje en mi tarjeta o por linkedin.
                                            </>)
                                        }
                                        </span>
                                        <div className="d-flex justify-content-center">
                                        <Button onClick={() => setShow(false)} variant="outline-info"
                                        style={{marginTop: '20px'}}
                                        >
                                            Cerrar mensaje
                                        </Button>
                                        </div>
                                    </Alert>}
                                <p className="contact__text">Ponerse en Contacto</p>
                                <Form onSubmit={sendMail}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control className="contact__input" type="text" 
                                        placeholder="Ingresa tu Nombre" name="user_name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="contact__input" type="email" 
                                        placeholder="Ingresa tu Email" name="user_email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control className="contact__input" as="textarea" rows={3} 
                                        placeholder="Ingresa un Mensaje" name="user_message"/>
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
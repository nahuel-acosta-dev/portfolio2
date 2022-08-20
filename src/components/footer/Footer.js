import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row>
                    
                    <Col className="d-flex align-items-center justify-content-center">
                        <Row>
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <p className="footer__title">&copy; Brian Nahuel Acosta</p>
                            </Col>
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <a href="https://github.com/nahuel43038" target="_blank" 
                                rel="noreferrer" className="text-decoration-none">
                                    <i className="bi bi-github"></i> github.com/nahuel43038
                                </a>
                            </Col>
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <a href="mailto:brianacostanahuel2000@gmail.com" 
                                className="text-decoration-none"
                                target="_blank" rel="noreferrer">
                                    <i className="bi bi-envelope"></i> brianacostanahuel2000@gmail.com
                                </a>
                            </Col>
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <a href="https://www.linkedin.com/in/nahuel-acosta-dev" 
                                className="text-decoration-none"
                                target="_blank" rel="noreferrer">
                                    <i className="bi bi-linkedin"></i> linkedin.com/in/nahuel-acosta-dev
                                </a>
                            </Col>
                            <Col xs={12} className="d-flex align-items-center justify-content-center">
                                <a href="tel:+541164729851" target="_blank" rel="noreferrer"
                                 className="text-decoration-none"
                                >
                                    <i className="bi bi-telephone"></i> +541164729851
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <aside>
                            <p className="footer__title">Credits</p>
                            <a href="https://iconos8.es" className="text-decoration-none"
                            target="_blank" rel="noreferrer">
                                Icons8
                            </a>
                        </aside>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
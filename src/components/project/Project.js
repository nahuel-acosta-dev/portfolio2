import React from 'react';
import {Carousel, Col, Container, Row,} from 'react-bootstrap';

const Project = ({subtitle, title, p1, p2, images, github, url, variant}) =>{

    return(
        <article className="project__article">
                            <Row>
                                <Col className="project" xs={12} lg={9}>
                                    <Carousel fade className="project__carousel" variant={variant}>
                                        {
                                            images.map((img, i) => (
                                                <Carousel.Item key={i}>
                                                    <figure
                                                    className="project__figure project__imgbx text-decoration-none">
                                                        <a href={url}
                                                        rel="noreferrer"
                                                        target="_blank">
                                                            <img
                                                            className="d-block w-100 figure-img img-fluid"
                                                            src={img}
                                                            alt="First slide"
                                                            />
                                                        </a>
                                                    </figure>
                                                </Carousel.Item>
                                            ))
                                        }
                                    </Carousel>
                                </Col>
                                <Col className="project__info" xs={12} lg>
                                    <Container>
                                    <div className="text-start">
                                        <span>{subtitle}</span>
                                        <p className="project__title">{title}</p>
                                        <p>
                                            {p1}
                                        </p>
                                        <p>
                                           {p2}
                                        </p>
                                        <Row>
                                            <Col xs={2}></Col>
                                            <Col>
                                                <a href={github}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-decoration-none"
                                                > 
                                                <i class="bi bi-github"></i>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href={url}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-decoration-none"
                                                > 
                                                <i class="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </Col>
                                            <Col xs={2}></Col>
                                        </Row>
                                    </div>
                                    </Container>
                                </Col>
                            </Row>
                        </article>
    )
}

export default Project;
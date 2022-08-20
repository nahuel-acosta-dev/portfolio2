import React from 'react';
import {Navbar, Nav, Offcanvas, Container} from 'react-bootstrap';
import Logo from '../../img/logo.png';

const CustomNavbar = () => {

    return (
    <header className="customNavbar">
      <Navbar collapseOnSelect variant="dark" expand="md" className="mb-3 customNavbar__navbar">
          <Container fluid>
              <Navbar.Brand href="#">
                <img
                alt="navbar logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Nahuel Acosta
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              variant="dark"
              className="customNavbar__offcanvas"
              restoreFocus={false}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img
                alt="navbar logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Nahuel Acosta
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/*show && <hr/>*/}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-xs-center text-sm-center">
                  <Nav.Link href="#home" className="customNavbar__link">
                    <p><span>01. </span> <span>Inicio</span></p>
                  </Nav.Link>
                  <Nav.Link href="#about_mi" className="customNavbar__link">
                    <span>02. </span> <span>Sobre Mi</span>
                  </Nav.Link>
                  <Nav.Link href="#cv" className="customNavbar__link">
                    <span>03. </span> <span>CV</span>
                  </Nav.Link>
                  <Nav.Link href="#projects" className="customNavbar__link"> 
                    <span>04. </span> <span>Projectos</span>
                  </Nav.Link>
                  <Nav.Link href="#contact" className="customNavbar__link">
                    <span>05. </span> <span>Contacto</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
    )
}
export default CustomNavbar;
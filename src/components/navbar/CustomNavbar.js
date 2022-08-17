import React from 'react';
import {Navbar, Nav, Offcanvas, Container} from 'react-bootstrap';
import Logo from '../../img/logo.png';

const CustomNavbar = () => {
    return (
    <header className="customNavbar">
      <Navbar variant="dark" expand="md" className="mb-3 customNavbar__navbar">
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              variant="dark"
              className="customNavbar__offcanvas"
              style={{backgroundColor: '#00040f'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#curriculum">CV</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
    )
}

export default CustomNavbar;
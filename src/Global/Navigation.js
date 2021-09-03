import React from 'react';
import './global.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar className='Navbar' /* bg="light" */ expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link 
                            to={'/'}
                            style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            La Bella's Salon & Spa
                        </Link>
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link>Home</Nav.Link> */}
                                <Nav.Link>
                                    <Link 
                                        to={'/about'}
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        About
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>Salon Etiquette</Nav.Link>
                                

                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Salon</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Spa</NavDropdown.Item>
        
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
import React, { Component } from 'react';
import './navigation.css'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar className="nav" bg="dark" variant="dark">
                <Container>
                    <Navbar>
                        <Navbar.Brand href="#" className="nav-text">RemoteAR</Navbar.Brand>
                    </Navbar>
                </Container>
                <Navbar.Toggle />
                <Nav className="justify-content-end">
                    <NavDropdown title={<FontAwesomeIcon icon={faCog} />} alignRight >
                        <NavDropdown.Item href="#">Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar>
        )
    }
}
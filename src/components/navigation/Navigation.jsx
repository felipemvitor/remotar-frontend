import React, { Component } from 'react';
import './navigation.css'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../auth.js'

export default class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    logout = () => {
        sessionStorage.setItem(auth, JSON.stringify({ auth: false }))
    }

    render() {
        return (
            <Navbar className="nav" bg="dark" variant="dark">
                <Navbar>
                    <Navbar.Brand href="/" className="nav-text">
                        <img src={process.env.PUBLIC_URL + '/img/remotar_text.png'} alt="" height="30"></img>
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle />
                <Nav className="justify-content-end">
                    <NavDropdown title={<FontAwesomeIcon icon={faCog} />} alignRight >
                        <NavDropdown.Item href="/" onClick={this.logout}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}
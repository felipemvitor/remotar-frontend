import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './login.css'
import { isAuthenticated } from '../../auth.js'

export default class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const data = sessionStorage.getItem("login")

        if (data) {
            const login = JSON.parse(data)

            if (login.remember) {
                console.log(isAuthenticated)
                this.setState({
                    email: login.email,
                    password: login.password,
                    remember: login.remember
                })
            }

        }
    }

    login = () => {
        const remember = this.inputRemember.checked
        const email = remember ? this.inputEmail.value : ''
        const password = remember ? this.inputPassword.value : ''

        sessionStorage.setItem('login', JSON.stringify({
            email: email,
            password: password,
            remember: remember,
            auth: true
        }))
    }

    renderRedirect = () => {
        if (isAuthenticated) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div className="login-container">
                {this.renderRedirect()}
                <Card className="login-card">
                    <Card.Title className="login-card-title">Sign In</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label className="login-form-label">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address"
                                    className="login-form-control"
                                    defaultValue={this.state.email}
                                    ref={element => this.inputEmail = element} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="login-form-label">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password"
                                    className="login-form-control"
                                    defaultValue={this.state.password}
                                    ref={element => this.inputPassword = element} />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" custom
                                    defaultChecked={this.state.remember}
                                    ref={element => this.inputRemember = element}>
                                </Form.Check>
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" className="button-green"
                                onClick={this.login}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

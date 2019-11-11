import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './login.css'

export default class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="login-container">
                <Card className="login-card">
                    <Card.Title className="login-card-title">Sign In</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label className="login-form-label">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" className="login-form-control" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="login-form-label">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" className="login-form-control"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" custom></Form.Check>
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" className="button-green">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
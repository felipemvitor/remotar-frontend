import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './client.css'

export default class Client extends Component {

    constructor(props) {
        super(props)
        this.state = {
            answered: false
        }
    }

    render() {
        return (
            <Card className="client-card">
                <Card.Body className="client-card-body">
                    <img src={`${process.env.PUBLIC_URL}/img/remotar_icon.png`} className="client-logo" alt=""></img>
                    <div className="client-info">
                        <p className="client-name">{this.props.name}</p>
                        <p className="client-product">{this.props.product}</p>
                    </div>
                    {!this.state.hidden ?
                        <p className="client-text-answer" onClick={() => {
                            this.props.onAnswer()
                            this.setState({ answered: true })
                        }}>Answer</p>
                        : null
                    }

                </Card.Body>
            </Card>
        )
    }
}
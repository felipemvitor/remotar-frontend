import React, { Component } from 'react'
import './clientspanel.css'
import Navigation from '../../navigation/Navigation'

export default class ClientsPanel extends Component {

    clients = [{}]

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navigation />

                <p className="clients-panel-title">Clientes disponíveis</p>
                <div className="clients-panel">

                    {this.clients.length > 0 ? (
                        <h1>Tem</h1>
                    ) : (
                            <div>

                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}
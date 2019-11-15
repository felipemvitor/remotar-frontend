import React, { Component } from 'react'
import './clientspanel.css'
import Navigation from '../../navigation/Navigation'

export default class ClientsPanel extends Component {

    clients = []

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="clients-panel">
                    <p className="clients-panel-title">Clientes disponíveis</p>

                    {this.clients.length > 0 ? (
                        <div className="clients-panel-list">

                        </div>
                    ) : (
                            <div className="clients-panel-empty-list">
                                <p className="clients-panel-empty-list-text">Nenhum cliente disponível</p>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}
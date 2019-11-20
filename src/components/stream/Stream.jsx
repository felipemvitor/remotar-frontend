import React, { Component } from 'react';
import './stream.css'
import Video from './video/Video';
import ReactResizeDetector from 'react-resize-detector'
import Dashboard from '../dashboard/Dashboard'
import Navigation from '../navigation/Navigation'
import Client from '../client/Client';
import {socket} from '../../socket/Socket'

export default class Stream extends Component {

    dashboards = [
        { name: "Tensão Real (Vr)", value: 42.0}, 
        { name: "Corrente Real (Ir)", value: 75.0 }, 
        { name: "Potência Ativa Total (Ptot)", value: 151.0 },
        { name: "Potência Aparente Total (Stot)", value: 247.0 },
        { name: "Potência Reativa Total (Qtot)", value: 160.25 },
        { name: "Fator de Potência Total (FPtot)", value: 920.0 },
        { name: "Rotação (RPM)", value: 920.0 }, 
    ]

    clients = [
        { name: 'Exsto Tecnologia', product: 'Exsto Kit XE902' },
    ]

    loadClients = () => {
        return this.state.clients.map(client => {
            return <Client
                name={client.name}
                product={client.product}>
            </Client >
        })
    }

    loadClientData = () => {
        return this.state.dashboards.map(d => {
            return <Dashboard name={d.name} value={d.value} key={d.name}></Dashboard >
        })
    }

    setDimension(width, height) {
        const streamWidth = width - 20
        const streamHeight = height - 20

        this.setState({
            width: `${width}px`,
            height: `${height}px`,
            streamWidth: `${streamWidth}px`,
            streamHeight: `${streamHeight}px`
        })
    }

    onResize = (width) => {
        let height = (width / 4) * 3
        this.setDimension(width, height)
    }

    constructor(props) {
        super(props);
        this.state = {
            streamHeight: '0',
            dashboards: this.dashboards,
            clients: this.clients
        };
    }

    componentDidMount() {
        socket.on('data', (data) => {        
            this.setState({
                dashboards: data
            })
        })
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="stream-container">
                    <div className="stream-clients">
                        <p className="stream-clients-title">Calls</p>
                        {this.loadClients()}
                    </div>
                    <div className="stream-video">
                        <ReactResizeDetector handleWidth onResize={(width) => this.onResize(width)}>
                            <Video height={this.state.streamHeight}></Video>
                        </ReactResizeDetector>
                    </div>
                    <div className="stream-dashboard">
                        <p className="stream-dashboard-title">Client Data</p>
                        {this.loadClientData()}
                    </div>
                </div >
            </div>
        )
    }
}
import React, { Component } from 'react';
import './stream.css'
import Video from './video/Video';
import ReactResizeDetector from 'react-resize-detector'
import Dashboard from '../dashboard/Dashboard'
import Navigation from '../navigation/Navigation'
import Client from '../client/Client';

export default class Stream extends Component {

    dashboards = [
        { name: 'Voltagem', value: 5, unit: 'V' },
        { name: 'Corrente', value: 5, unit: 'A' },
        { name: 'Potência Ativa Total', value: 5, unit: 'W' },
        { name: 'Potência Aparente Total', value: 5, unit: 'W' },
        { name: 'Potência Reativa Total', value: 5, unit: 'W' },
        { name: 'Fator de Potência Total', value: 5, unit: 'W' }
    ]

    clients = [
        { name: 'Client', product: 'Product' },
        { name: 'Client', product: 'Product' },
        { name: 'Client', product: 'Product' },
        { name: 'Client', product: 'Product' },
        { name: 'Client', product: 'Product' }
    ]

    loadClients = () => {
        return this.clients.map(client => {
            return <Client
                name={client.name}
                product={client.product}>
            </Client >
        })
    }

    loadClientData = () => {
        return this.dashboards.map(d => {
            return <Dashboard name={d.name} value={d.value} unit={d.unit}></Dashboard >
        })
    }

    setDimension(width, height) {
        const streamWidth = width - 20
        const streamHeight = height - 20

        console.log('Stream Width: ' + streamWidth)
        console.log('Stream Height: ' + streamHeight)

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
            streamWidth: '0',
            streamHeight: '0'
        };
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="stream-container">
                    <div className="stream-clients" style={{ height: this.state.height }}>
                        <p className="stream-clients-title">Chamados</p>
                        {this.loadClients()}
                    </div>
                    <div className="stream-video" style={{ height: this.state.height }}>
                        <ReactResizeDetector handleWidth onResize={(width) => this.onResize(width)}>
                            <Video width={this.state.streamWidth} height={this.state.streamHeight} style={{ background: 'green' }}></Video>
                        </ReactResizeDetector>
                    </div>
                    <div className="stream-dashboard" style={{ height: this.state.height }}>
                        {this.loadClientData()}
                    </div>
                </div >
            </div>
        )
    }
}
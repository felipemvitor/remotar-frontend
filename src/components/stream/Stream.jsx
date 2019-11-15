import React, { Component } from 'react';
import './stream.css'
import Video from './video/Video';
import ReactResizeDetector from 'react-resize-detector'
import Dashboard from '../dashboard/Dashboard'
import Navigation from '../navigation/Navigation'
import Client from '../client/Client';
import {socket} from '../../socket/Socket'

export default class Stream extends Component {

    dashboards = []

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
        return this.state.dashboards.map(d => {
            return <Dashboard name={d.name} value={d.value} key={d.name}></Dashboard >
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
        console.log(`Size: (${width}, ${height})`)
    }

    constructor(props) {
        super(props);
        this.state = {
            streamWidth: '0',
            streamHeight: '0',
            dashboards: [],
            clients: [],
            stream: ''
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
                        <p className="stream-clients-title">Chamados</p>
                        {this.loadClients()}
                    </div>
                    <div className="stream-video">
                        <ReactResizeDetector handleWidth onResize={(width) => this.onResize(width)}>
                            <Video width={this.state.streamWidth} height={this.state.streamHeight} style={{ background: 'green' }}></Video>
                        </ReactResizeDetector>
                    </div>
                    <div className="stream-dashboard">
                        {this.loadClientData()}
                    </div>
                </div >
            </div>
        )
    }
}
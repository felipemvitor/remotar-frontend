import React, { Component } from 'react';
import './video.css'
import { socket } from '../../../socket/Socket';

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('props: ' + props.width)
        console.log('props: ' + props.height)
    }

    componentDidMount() {
        socket.on("stream", (data) => {
            console.log('stream')
            this.setState({
                stream: data
            })
        })
    }

    render() {
        return (
            <img width={'100%'} height={'100%'} alt="" src={this.state.stream} />
        )
    }
}
import React, { Component } from 'react';
import './video.css'
import { socket } from '../../../socket/Socket';

export default class Video extends Component {

    labelImg = 1001
    dataId = 0
    dataLength = 0;
    receivedLength = 0;
    dataByte = new Uint8Array(0);
    readyToGetFrame = true;

    constructor(props) {
        super(props);
        this.state = {
            stream: null,
            width: props.height,
            height: props.width
        };
    }

    componentDidMount() {
        socket.on("stream", (data) => {
            this.streamVideo(data)
        })
    }

    render() {
        return (
            <img height={this.props.height} alt="" src={this.state.stream} onClick={this.sendCoordinates.bind(this)} />
        )
    }

    sendCoordinates = (event) => {
        const width = event.target.clientWidth
        const height = event.target.clientHeight

        const x = event.nativeEvent.offsetX
        const y = event.nativeEvent.offsetY

        const coordinates = {
            x: (x * 100) / width,
            y: (y * 100) / height
        }

        console.log(`Sending coordinates: (${coordinates.x}, ${coordinates.y})`)
        socket.emit('plot', coordinates)
    }

    streamVideo(stream) {
        var dataByte = new Uint8Array(stream);
        var label = this.byteToInt32(dataByte, 0);
        if (label === this.labelImg) {
            var dataId = this.byteToInt32(dataByte, 4);

            if (dataId !== this.dataId) {
                //console.log("new ID");
                this.receivedLength = 0;
                this.dataId = dataId;

                this.dataLength = this.byteToInt32(dataByte, 8);
                //var _offset = this.byteToInt32(dataByte, 12);

                if (this.receivedLength === 0) this.dataByte = new Uint8Array(0);
                this.receivedLength += dataByte.length - 16;

                //----------------add byte----------------
                this.dataByte = this.combineArray(this.dataByte, dataByte.slice(16, dataByte.length));
                //-

                //console.log(this.dataLength + ' : ' + a.length + ' / ' + c.length);

                if (this.readyToGetFrame) {
                    if (this.receivedLength === this.dataLength) this.processImageData(this.dataByte);
                }
            }
            else if (dataId === this.dataId) {

                //console.log("adding data");
                this.dataId = dataId;
                this.dataLength = this.byteToInt32(dataByte, 8);
                //var _offset = this.byteToInt32(dataByte, 12);

                if (this.receivedLength === 0) this.dataByte = new Uint8Array(0);
                this.receivedLength += dataByte.length - 16;

                //----------------add byte----------------
                this.dataByte = this.combineArray(this.dataByte, dataByte.slice(16, dataByte.length));
                //----------------add byte----------------

                if (this.readyToGetFrame) {
                    if (this.receivedLength === this.dataLength) this.processImageData(this.dataByte);
                }
            }
        }
    }

    byteToInt32(byte, offset) {
        return byte[offset] + byte[offset + 1] * 256 + byte[offset + 2] * 256 * 256 + byte[offset + 3] * 256 * 256 * 256;
    }

    processImageData(byte) {
        this.readyToGetFrame = false;
        //----conver byte[] to Base64 string----
        var binary = '';
        var bytes = new Uint8Array(byte);
        var len = this.dataByte.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        //----conver byte[] to Base64 string----

        //----display image----
        // console.log(`data:image/jpeg;base64,${btoa(binary)}`)

        var video = `data:image/jpeg;base64,${btoa(binary)}`


        if (this.state.width === 0 || this.state.height === 0) {
            var image = new Image()
            image.src = video

            this.setState({
                stream: video,
                width: image.width,
                height: image.height
            })
        } else {
            this.setState({
                stream: video
            })
        }

        //img.width = data.Width;
        //img.height = data.Height;
        //----display image----

        this.readyToGetFrame = true;
    }

    combineArray(a, b) {
        var c = new Int8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        //----------------add byte----------------

        if (this.readyToGetFrame) {
            if (this.receivedLength === this.dataLength) {
                this.processImageData(this.dataByte);
            }
        }
        return c;
    }
}
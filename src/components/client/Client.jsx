import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import './client.css'

export default class Client extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Card className="client-card">
				<Card.Body className="client-card-body">
					<img src={`${process.env.PUBLIC_URL}/img/remotar_icon.png`} className="client-logo"></img>
					<div className="client-info">
						<p className="client-name">{this.props.name}</p>
						<p className="client-product">{this.props.product}</p>
					</div>
					<p className="client-text-answer">Atender</p>
				</Card.Body>
			</Card>
				)
			}
}
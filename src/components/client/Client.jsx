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
						<p className="client-name">Client name</p>
						<p className="client-product">Product name</p>
					</div>
					<p className="client-text-answer">Answer</p>
				</Card.Body>
			</Card>
				)
			}
}
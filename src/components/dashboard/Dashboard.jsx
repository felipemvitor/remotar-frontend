import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import './dashboard.css'

export default class Dashboard extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Card className="dashboard-card">
				<Card.Body className="dashboard-card-body">
					<h4 className="dashboard-title">{this.props.name}</h4>
					<p className="dashboard-value"><span className="dashboard-span">{this.props.value}</span> {this.props.unit}</p>
				</Card.Body>
			</Card>
		)
	}
}
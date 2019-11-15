import React, { Component } from 'react'
import './home.css'
import { Button } from 'react-bootstrap'
import Navigation from '../navigation/Navigation.jsx'

export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div className="home-container">
                    <p className="home-title"> Welcome to </p>
                    <img src={process.env.PUBLIC_URL + '/img/remotar_logo.png'} alt="" className="home-image"></img>

                    <Button variant="outline-primary" type="submit" className="button-green home-button" href="/stream">
                        Start Working
                    </Button>
                </div>
            </div>


        )
    }
}

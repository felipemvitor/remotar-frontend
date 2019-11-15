import React, { Component } from 'react'
import './pagenotfound.css'

export default class PageNotFound extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <img srcSet={`${process.env.PUBLIC_URL}/img/page_not_found.svg`} alt=""
                    className="not-found-image">
                </img>

                <p className="not-found-title">Page not found</p>
                
                <p className="not-found-text"><a href="/">Click here</a> to get back to home page.</p>
            </div>
        )
    }
}
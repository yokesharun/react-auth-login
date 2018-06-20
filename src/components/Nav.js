import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <div className="ui menu">
                <div className="header item">
                    Auth Login
                </div>
                <Link className="item" to="/home"> Home</Link>
                <Link className="item" to="/aboutus"> About us</Link>
            </div>
        )
    }
}
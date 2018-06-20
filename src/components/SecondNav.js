import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SecondNav extends Component {

    render() {
        return (
            <div className="ui menu">
                <div className="header item">
                    About Us Nav - Second Nav
                </div>
                <Link className="item" to="/aboutus/profile"> Profile</Link>
                <Link className="item" to="/aboutus/team"> Team</Link>
                <Link className="item" to="/aboutus/contact"> Contact</Link>
                <Link className="item" to="/home"> Home</Link>
                <Link className="item" to="/aboutus"> About us</Link>
            </div>
        )
    }
}
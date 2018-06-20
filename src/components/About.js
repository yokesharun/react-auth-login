import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SecondNav from'./SecondNav';
import Nav from'./Nav';

export default class About extends Component {

    render() {

        return (
            <div>
                <Nav/>
                <h1>About us Page</h1>
                <SecondNav/>
            </div>
        );
    }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

export default class Home extends Component {

    render() {

        return (
            <div>
            	<Nav/>
                <h1>Home Page</h1>
            </div>
        );
    }
}

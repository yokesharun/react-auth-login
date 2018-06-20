import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Page from './components/Page';

export default class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
             	<Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/aboutus" component={About} />
                    <Route exact path="/aboutus/:page" component={Page} />
                	<Route exact path="/home" component={Home} />
            	</Switch>
            </BrowserRouter>
        );
    }
}
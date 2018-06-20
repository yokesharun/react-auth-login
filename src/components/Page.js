import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SecondNav from './SecondNav';

export default class Page extends Component {

	constructor(props) {
        super(props);
        this.state = {
            page: this.props.match.params.page
        }
    }

	componentWillReceiveProps(props){
		this.setState({ page : props.match.params.page});
	}

	render() {

        return (
        	<div>
        	 	<SecondNav/>
        		<h1>{this.state.page} Page</h1>
	        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        	</div>
        	);

    };
}
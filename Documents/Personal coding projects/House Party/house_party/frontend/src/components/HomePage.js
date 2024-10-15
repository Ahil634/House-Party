import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to the House Party!</h1>
                <p>This is the home page</p>
                <Link to="/create">Create a Room</Link>
                <br />
                <Link to="/join">Join a Room</Link>
            </div>
        );
    }
}

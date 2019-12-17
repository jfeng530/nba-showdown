import React, { Component } from 'react';
import NavBar from '../components/NavBar'

export class NavContainer extends Component {
    render() {
        return (
            <div className="ui container">
                <NavBar />
            </div>
        );
    }
}

export default NavContainer;

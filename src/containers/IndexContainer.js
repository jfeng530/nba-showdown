import React, { Component } from 'react';
import List from '../components/List'
import SearchBar from '../components/SearchBar'

export class IndexContainer extends Component {

    render() {
    
        return (
            <div>
                <SearchBar />
                <List teams={this.props.teams} />
            </div>
        );
    }
}

export default IndexContainer;

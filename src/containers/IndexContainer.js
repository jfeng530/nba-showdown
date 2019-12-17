import React, { Component } from 'react';
import List from '../components/List'
import SearchBar from '../components/SearchBar'

export class IndexContainer extends Component {

    renderList = () => {
        if (this.props.teams) {
            return <List teams={this.props.teams} />
        }
        else if (this.props.team) {
            return <List team={this.props.team} />
        }
        else if (this.props.season) {
            return <List season={this.props.season} teamId={this.props.teamId} />
        }
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                {/* <List team={this.props.team} teams={this.props.teams} /> */}
                {this.renderList}
            </div>
        );
    }
}

export default IndexContainer;

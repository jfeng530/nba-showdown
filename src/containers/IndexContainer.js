import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import List from '../components/List'

export class IndexContainer extends Component {

    render() {
        return (
            <div className="ui center aligned container">
                <List team={this.props.team} teams={this.props.teams} />
            </div>
        );
    }
}

export default withRouter(IndexContainer)

import React, { Component } from 'react';
import TeamListItem from './TeamListItem'

export class List extends Component {
    render() {

        const renderListItems = this.props.teams.map(team => <TeamListItem key={team.id} team={team} />)

        // if (this.props.teams) {
        //     renderListItems = this.props.teams.map(team => <List key={team.id} team={team} />)
        // }

        console.log(this.props.teams)

        return (
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>ABV</th>
                    <th>Conference</th>
                    <th>Division</th>
                </tr>
                {renderListItems}
            </table>
        );
    }
}

export default List;

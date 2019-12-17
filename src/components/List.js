import React, { Component } from 'react';
import TeamListItem from './TeamListItem'
import TemListHeader from '../components/TeamListHeader'
import TeamListHeader from '../components/TeamListHeader'
import TeamSeasonsListHeader from '../components/TeamSeasonsListHeader'

export class List extends Component {

    render() {
        
        const renderListHeader
        const renderListItems

        if (this.props.teams) {
            renderListHeader = <TeamListHeader />
            renderListItems = this.props.teams.map(team => <TeamListItem key={team.id} team={team} />)
        } else if (this.props.team) {
            renderListHeader = <TeamSeasonsListHeader />
            fetch(`http://localhost:3000/teams/${this.props.team.id}`)
            .then(r => r.json())
            .then(team => {
                renderListItems = team.seasons.map(season => <SeasonListItem key={season.id} season={season} />)
            })
        }
        
        return (
            <table>
                {renderListHeader}
                {renderListItems}
            </table>
        )
    }
}

export default List;

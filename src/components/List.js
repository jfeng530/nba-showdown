import React, { Component } from 'react';
import TeamListItem from './TeamListItem'
import TeamListHeader from '../components/TeamListHeader'
import TeamSeasonsListHeader from '../components/TeamSeasonsListHeader'
import TeamSeasonListItem from '../components/TeamSeasonListItem'
import TeamRosterListHeader from '../components/TeamRosterListHeader'
import TeamRosterListItem from '../components/TeamRosterListItem'

export class List extends Component {

    render() {
        
        let renderListHeader
        let renderListItems

        if (this.props.teams) {
            renderListHeader = <TeamListHeader />
            renderListItems = this.props.teams.map(team => <TeamListItem key={team.id} team={team} />)
        } else if (this.props.team) {
            renderListHeader = <TeamSeasonsListHeader />
            fetch(`http://localhost:3000/teams/${this.props.team.id}`)
            .then(r => r.json())
            .then(team => {
                renderListItems = team.seasons.map(season => <TeamSeasonListItem key={season.id} season={season} teamId={team.id} />)
            })
        } else if (this.props.season) {
            renderListHeader = <TeamRosterListHeader />
            fetch(`http://localhost:3000/teams/${this.props.teamId}/${this.props.season}`)
            .then(r => r.json())
            .then(roster => {
                renderListItems = roster.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
            })
        } else if (this.props.player) {
            renderListHeader = <TeamRosterListHeader />
            fetch(`http://localhost:3000/players/${this.props.player.id}/seasons`)
            .then(r => r.json())
            .then(stats => {
                renderListItems = stats.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
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

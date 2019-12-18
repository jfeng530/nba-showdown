import React, { Component } from 'react';
import TeamListItem from './TeamListItem'
import TeamListHeader from '../components/TeamListHeader'
import TeamSeasonsListHeader from '../components/TeamSeasonsListHeader'
import TeamSeasonListItem from '../components/TeamSeasonListItem'

export class List extends Component {

    render() {
        
        let renderListHeader
        let renderListItems

        if (this.props.teams) {
            renderListHeader = <TeamListHeader />
            renderListItems = this.props.teams.map(team => <TeamListItem key={team.id} team={team} />)
        } else if (this.props.team) {
            renderListHeader = <TeamSeasonsListHeader />
            renderListItems = this.props.team.seasons.map(season => <TeamSeasonListItem key={season.id} season={season} team={this.props.team} />)
        } else if (this.props.player) {
            // renderListHeader = <TeamRosterListHeader />
            // console.log('fetch')
            // fetch(`http://localhost:3000/players/${this.props.player.id}/seasons`)
            // .then(r => r.json())
            // .then(stats => {
            //     renderListItems = stats.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
            // })
        }
        
        return (
            <div className="container ui center aligned">
                <table>
                    {renderListHeader}
                    {renderListItems}
                </table>
            </div>
        )
    }
}

export default List;

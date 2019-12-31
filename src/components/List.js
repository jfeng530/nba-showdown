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
        }
        
        return (
            <div className="ui three column grid">
                <div className="column">
                    
                </div>
                <div className="column">
                    <div className="container ui center aligned">
                        <table>
                            {renderListHeader}
                            {renderListItems}
                        </table>
                    </div>
                </div>
                <div className="column">
                    
                </div>
            </div>
            
        )
    }
}

export default List;

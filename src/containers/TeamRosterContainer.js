import React, { Component } from 'react';
import TeamRosterListHeader from '../components/TeamRosterListHeader'
import TeamRosterListItem from '../components/TeamRosterListItem'

export class TeamRosterContainer extends Component {

    state = {
        rosterStats: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/teams/${this.props.teamId}/${this.props.seasonId}`)
        .then(r => r.json())
        .then(rosterStats => {
            this.setState({
                rosterStats: rosterStats
            })
        })
    }
    
    render() {
        let renderListItems = this.state.rosterStats.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
        return (
            <div className="container ui center aligned">
                <table>
                    <TeamRosterListHeader />
                    {renderListItems}
                </table>
            </div>
        );
    }
}

export default TeamRosterContainer;

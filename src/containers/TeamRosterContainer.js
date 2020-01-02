import React, { Component } from 'react';
import TeamRosterListHeader from '../components/TeamRosterListHeader'
import TeamRosterAvgHeader from '../components/TeamRosterAvgHeader'
import TeamRosterListItem from '../components/TeamRosterListItem'
import TeamRosterAvgItem from '../components/TeamRosterAvgItem'
import TeamBio from '../components/TeamBio'

export class TeamRosterContainer extends Component {

    state = {
        rosterStats: [],
        team: {},
        year: 0
    }

    componentDidMount(){
        fetch(`http://localhost:3000/teams/${this.props.teamId}/${this.props.seasonId}`)
        .then(r => r.json())
        .then(rosterStats => {
            this.setState({
                rosterStats: rosterStats.sort(function(a, b) {
                    return b.gp - a.gp
                })
            })
        })
        fetch(`http://localhost:3000/teams/${this.props.teamId}`)
        .then(r => r.json())
        .then(team => {
            this.setState({
                team: team
            })
        })
    }
    
    render() {
        let renderListItems = this.state.rosterStats.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
        let renderAvgItems = this.state.rosterStats.map(stat => <TeamRosterAvgItem key={stat.id} stat={stat}/>)
        return (
            <div className="container ui center aligned">
                <TeamBio team={this.state.team} year={this.state.rosterStats[0]}/>
                <br></br>
                <h2>Season Averages</h2>
                <table className="ui selectable striped celled small table">
                    <TeamRosterAvgHeader />
                    <tbody>
                    {renderAvgItems}
                    </tbody>
                </table>
                <h2>Season Totals</h2>
                <table className="ui selectable striped celled small table">
                    <TeamRosterListHeader />
                    <tbody>
                    {renderListItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TeamRosterContainer;

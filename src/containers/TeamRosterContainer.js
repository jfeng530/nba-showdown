import React, { Component } from 'react';
import TeamRosterListHeader from '../components/TeamRosterListHeader'
import TeamRosterAvgHeader from '../components/TeamRosterAvgHeader'
import TeamRosterListItem from '../components/TeamRosterListItem'
import TeamRosterAvgItem from '../components/TeamRosterAvgItem'

export class TeamRosterContainer extends Component {

    state = {
        rosterStats: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/teams/${this.props.teamId}/${this.props.seasonId}`)
        .then(r => r.json())
        .then(rosterStats => {
            this.setState({
                rosterStats: rosterStats.sort(function(a, b) {
                    return a.gp - b.gp
                })
            })
        })
    }
    
    render() {
        let renderListItems = this.state.rosterStats.map(stat => <TeamRosterListItem key={stat.id} stat={stat}/>)
        let renderAvgItems = this.state.rosterStats.map(stat => <TeamRosterAvgItem key={stat.id} stat={stat}/>)
        return (
            <div className="container ui center aligned">
                <h2>Season Averages</h2>
                <table className="ui sortable striped celled compact table">
                    <TeamRosterAvgHeader />
                    {renderAvgItems}
                </table>
                <h2>Season Totals</h2>
                <table className="ui sortable striped celled compact table">
                    <TeamRosterListHeader />
                    {renderListItems}
                </table>
            </div>
        );
    }
}

export default TeamRosterContainer;

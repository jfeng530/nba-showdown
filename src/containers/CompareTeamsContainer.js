import React, { Component } from 'react';
import CompareTeamBio from '../components/CompareTeamBio'
import CompareTeamCard from '../components/CompareTeamCard'
import CompareTeamStats from '../components/CompareTeamStats'

export class CompareTeamsContainer extends Component {

  state = {
    team1: null,
    team1roster: [],
    team2: null,
    team2roster: []
  }

  setTeam1 = (teamRoster, team) => {
    console.log(teamRoster)
    console.log(team)
    this.setState({
      team1: team,
      team1roster: teamRoster
    })
  }

  setTeam2 = (teamRoster, team) => {
    console.log(teamRoster)
    console.log(team)
    this.setState({
      team2: team,
      team2roster: teamRoster
    })
  }

  render() {
    return (
      <div className="ui container">
          <div className="ui two column grid">
              <div className="column">
                  {this.state.team1 ? <CompareTeamBio team={this.state.team1} /> : <CompareTeamCard setTeam1={this.setTeam1}/>}
              </div>
              <div className="column">
                  {this.state.team2 ? <CompareTeamBio team={this.state.team2} /> : <CompareTeamCard setTeam2={this.setTeam2}/>} 
              </div>
          </div>
          {this.state.team1 && this.state.team2 ? <CompareTeamStats team1roster={this.state.team1roster} team2roster={this.state.team2roster}/> : null}
      </div>
    );
  }
}

export default CompareTeamsContainer;

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
    this.setState({
      team1: team,
      team1roster: teamRoster
    })
  }

  setTeam2 = (teamRoster, team) => {
    this.setState({
      team2: team,
      team2roster: teamRoster
    })
  }

  resetTeam1 = () => {
    this.setState({
      team1: null,
      team1roster: []
    })
  }

  resetTeam2 = () => {
    this.setState({
      team2: null,
      team2roster: []
    })
  }

  render() {

    return (
      <div className="ui container">
          <div className="ui two column grid">
              <div className="column">
                  {this.state.team1 ? <CompareTeamBio resetTeam1={this.resetTeam1} team={this.state.team1} roster={this.state.team1roster}/> : <CompareTeamCard setTeam1={this.setTeam1}/>}
              </div>
              <div className="column">
                  {this.state.team2 ? <CompareTeamBio resetTeam2={this.resetTeam2} team={this.state.team2} roster={this.state.team2roster}/> : <CompareTeamCard setTeam2={this.setTeam2}/>} 
              </div>
          </div>
          {this.state.team1roster.length === 0 || this.state.team2roster.length === 0 ? null  : <CompareTeamStats team1roster={this.state.team1roster} team2roster={this.state.team2roster}/>}
      </div>
    )
  }
}

export default CompareTeamsContainer;

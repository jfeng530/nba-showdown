import React, { Component } from 'react';
import SimTeamBio from '../components/SimTeamBio'
import CompareTeamCard from '../components/CompareTeamCard'
import { NavLink } from 'react-router-dom'
import { MdBuild } from 'react-icons/md'

export class SimulateContainer extends Component {
  
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
        <MdBuild size='25em' />
        <h1 style={{ margin: 35 }}>Under Construction</h1>
        <h4>Currently optimizating the simulation, so that it will run even faster and better than ever before!</h4>
        <h4>Will be back soon!</h4>
        {/* <h4 className="ui horizontal divider header">
          <i className="gamepad icon"></i>
          Simulate
        </h4>
          <div className="ui two column grid">
              <div className="column">
                  {this.state.team1 && this.state.team1roster ? <SimTeamBio resetTeam1={this.resetTeam1} team={this.state.team1} roster={this.state.team1roster}/> : <CompareTeamCard setTeam1={this.setTeam1}/>}
              </div>
              <div className="column">
                  {this.state.team2 && this.state.team2roster ? <SimTeamBio resetTeam2={this.resetTeam2} team={this.state.team2} roster={this.state.team2roster}/> : <CompareTeamCard setTeam2={this.setTeam2}/>} 
              </div>
          </div>
          {this.state.team1roster.length !== 0 && this.state.team2roster.length !== 0 ? <NavLink to={"/simulate/" + this.state.team1roster[0].season.id + "/" + this.state.team2roster[0].season.id}><button className="ui inverted orange button">Start Simulation</button></NavLink> : null} */}
      </div>
    )
  }
}

export default SimulateContainer;

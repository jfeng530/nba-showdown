import React, { Component } from 'react';
import CompareTeamListItem from '../components/CompareTeamListItem'
import CompareTeamSeason from '../components/CompareTeamSeason'
import { connect } from 'react-redux'

export class CompareTeamCard extends Component {

  state = {
    selectedTeam: null,
    seasons: []
  }

  handleTeamClick = (team) => {
    // console.log(team)
    fetch(`http://localhost:3000/teams/${team.id}`)
    .then(r => r.json())
    .then(res => {
      this.setState({
        selectedTeam: team,
        seasons: res.seasons
      })
    })
  }

  handleSeasonClick = (roster) => {
    if (this.props.setTeam1) {
      this.props.setTeam1(roster, this.state.selectedTeam)
      this.setState({
          selectedTeam: null
      })
    } else {
      this.props.setTeam2(roster, this.state.selectedTeam)
      this.setState({
          selectedTeam: null
      })
    }
  }

  render() {

    let renderTeams = this.props.teams.map(team => <CompareTeamListItem key={team.id} team={team} handleTeamClick={this.handleTeamClick}/>)
    let renderTeamSeasons = this.state.seasons.map(season => <CompareTeamSeason key={season.id} season={season} handleSeasonClick={this.handleSeasonClick}/>)

    return (
      <div className="ui selection list">
        {this.state.selectedTeam ? this.state.selectedTeam.full_name : renderTeams}
        {this.state.selectedTeam ? renderTeamSeasons : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { teams: state.teams }
}

export default connect(mapStateToProps)(CompareTeamCard);

import React, { Component } from 'react';

export class CompareTeamSeason extends Component {

  handleClick = () => {
    fetch(`http://nba-showdown.herokuapp.com/teams/${this.props.season.team_id}/${this.props.season.year}`)
    .then(r => r.json())
    .then(roster => {
      this.props.handleSeasonClick(roster)
    })
  }

  render() {
    return (
      <div className="item" onClick={this.handleClick}>
        {this.props.season.year}
      </div>
    )
  }
}

export default CompareTeamSeason;

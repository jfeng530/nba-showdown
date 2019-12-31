import React, { Component } from 'react';
import TeamListItem from '../components/TeamListItem'

export class ShowTeams extends Component {

  render() {

    let east = this.props.teams.filter(team => team.conference === "East")
    let west = this.props.teams.filter(team => team.conference === "West")
    let renderEast = east.map(team => <TeamListItem key={team.id} team={team} />)
    let renderWest = west.map(team => <TeamListItem key={team.id} team={team} />)

    return (
      <div className="ui two column grid">
        <div className="row">
          <div className="column">
            <div className="ui middle aligned list">
              <h2>Eastern Conference</h2>
              {renderEast}
            </div>
          </div>
          <div className="column">
            <div className="ui middle aligned list">
              <h2>Western Conference</h2>
              {renderWest}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTeams;

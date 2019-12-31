import React, { Component } from 'react';

export class SimTeamBio extends Component {

  handleClick = () => {
    if (this.props.resetTeam1) {
      this.props.resetTeam1()
    } else {
      this.props.resetTeam2()
    }
  }

  render() {
    
    let renderRoster = this.props.roster.map(r => <div className="item">{r.player.first_name} {r.player.last_name}</div>)

    return (
      <div>
        <h2>{this.props.team.full_name}</h2>
        {this.props.roster.length === 0 ? <button onClick={this.handleClick}>Try Another Team</button> : <h3>{this.props.roster[0].season.year}</h3>}
        <div className="ui list">
          {renderRoster}
        </div>
      </div>
    );
  }
}

export default SimTeamBio;

import React, { Component } from 'react';

export class CompareTeamBio extends Component {

  handleClick = () => {
    if (this.props.resetTeam1) {
      this.props.resetTeam1()
    } else {
      this.props.resetTeam2()
    }
  }
  
  render() {
    return (
      <>
      <div>
        <img src={this.props.team.logo} alt={this.props.team.full_name} style={{
          width: "100px",
          height: "100%"
        }}/>
      </div>
      <div>
        <h2 className="header">{this.props.team.full_name}</h2>
        {this.props.roster.length === 0 ? <button onClick={this.handleClick}>Try Another Team</button> : <h3>{this.props.roster[0].season.year}</h3>}
      </div>
      </>
    )
  }
}

export default CompareTeamBio;

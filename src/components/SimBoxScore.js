import React, { Component } from 'react';
import TeamBoxScore from "./TeamBoxScore"

export class SimBoxScore extends Component {

  
  render() {
    
    let team1total = 0
    let team2total = 0
  
    this.props.team1.stats.forEach(stat => {
      team1total += stat.sim.fg2m * 2
      team1total += stat.sim.fg3m * 3
      team1total += stat.sim.ftm
    })

    this.props.team2.stats.forEach(stat => {
      team2total += stat.sim.fg2m * 2
      team2total += stat.sim.fg3m * 3
      team2total += stat.sim.ftm
    })

    return (
      <>
       <div className="ui two statistics">
        <div className="statistic">
          <div className="value">
            <img src={this.props.team1.team.logo} className="ui rounded inline image" alt={this.props.team1.team.full_name}></img>
            {team1total}
          </div>
          <div>
            {this.props.team1.year} {this.props.team1.team.full_name}
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            <img src={this.props.team2.team.logo} className="ui rounded inline image" alt={this.props.team2.team.full_name}></img>
            {team2total}
          </div>
          <div>
            {this.props.team2.year} {this.props.team2.team.full_name}
          </div>
        </div>
       </div>
       <br></br>
       <TeamBoxScore teamStats={this.props.team1}/>
       <TeamBoxScore teamStats={this.props.team2}/>
      </>
    );
  }
}

export default SimBoxScore;

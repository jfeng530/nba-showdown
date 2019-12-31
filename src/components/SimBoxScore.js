import React, { Component } from 'react';

export class SimBoxScore extends Component {

  
  render() {
    // debugger
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
            {team1total}
          </div>
          <div>
            {this.props.team1.team.full_name}
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            {team2total}
          </div>
          <div>
            {this.props.team2.team.full_name}
          </div>
        </div>
       </div> 
      </>
    );
  }
}

export default SimBoxScore;

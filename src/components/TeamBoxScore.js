import React from 'react';
import BoxScoreLine from './BoxScoreLine'

const TeamBoxScore = (props) => {

  const { teamStats } = props

  let renderScoreLine = teamStats.stats.map(stat => <BoxScoreLine stat={stat}/>)
  
  let teamtotal = 0
  let teamfg2a = 0
  let teamfg2m = 0
  let teamfg3a = 0
  let teamfg3m = 0
  let teamfta = 0
  let teamftm = 0
  let teamoreb = 0
  let teamdreb = 0
  let teamast = 0
  let teamstl = 0
  let teamblk = 0
  let teamto = 0

  teamStats.stats.forEach(stat => {
    teamtotal += stat.sim.fg2m * 2
    teamtotal += stat.sim.fg3m * 3
    teamtotal += stat.sim.ftm
    teamfg2a += stat.sim.fg2a
    teamfg2m += stat.sim.fg2m
    teamfg3a += stat.sim.fg3a
    teamfg3m += stat.sim.fg3m
    teamfta += stat.sim.fta
    teamftm += stat.sim.ftm
    teamoreb += stat.sim.oreb
    teamdreb += stat.sim.dreb
    teamast += stat.sim.ast
    teamstl += stat.sim.stl
    teamblk += stat.sim.blk
    teamto += stat.sim.to
  })

  return (
    <>
      <h2>{teamStats.team.full_name}</h2>
      <table className="ui compact table">
        <thead>
          <tr>
            <th>Player</th>
            <th>FG</th>
            <th>3PT</th>
            <th>FT</th>
            <th>OREB</th>
            <th>DREB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TO</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {renderScoreLine}
        </tbody>
        <thead>
          <tr>
            <th>Team</th>
            <th>{teamfg2m + teamfg3m}-{teamfg2a + teamfg3a}</th>
            <th>{teamfg3m}-{teamfg3a}</th>
            <th>{teamftm}-{teamfta}</th>
            <th>{teamoreb}</th>
            <th>{teamdreb}</th>
            <th>{teamast}</th>
            <th>{teamstl}</th>
            <th>{teamblk}</th>
            <th>{teamto}</th>
            <th>{teamtotal}</th>
          </tr>
          <tr>
            <th></th>
            <th>{Math.round((teamfg2m+teamfg3m)/(teamfg2a+teamfg3a) * 1000)/10}%</th>
            <th>{Math.round((teamfg3m/teamfg3a) * 1000)/10}%</th>
            <th>{Math.round((teamftm/teamfta) * 1000)/10}%</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default TeamBoxScore;

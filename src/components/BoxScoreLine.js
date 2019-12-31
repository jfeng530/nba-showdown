import React from 'react';

const BoxScoreLine = (props) => {

  const { stat } = props
  let fga = stat.sim.fg2a + stat.sim.fg3a
  let fgm = stat.sim.fg2m + stat.sim.fg3m
  let pts = (stat.sim.fg2m * 2) + (stat.sim.fg3m * 3) + stat.sim.ftm
  // debugger
  return (
    <tr>
     <td>{stat.player.first_name} {stat.player.last_name}</td>
     <td>{fgm}-{fga}</td>
     <td>{stat.sim.fg3m}-{stat.sim.fg3a}</td>
     <td>{stat.sim.ftm}-{stat.sim.fta}</td>
     <td>{stat.sim.oreb}</td>
     <td>{stat.sim.dreb}</td>
     <td>{stat.sim.ast}</td>
     <td>{stat.sim.stl}</td>
     <td>{stat.sim.blk}</td>
     <td>{stat.sim.to}</td>
     <td>{pts}</td>
    </tr>
  );
}

export default BoxScoreLine;

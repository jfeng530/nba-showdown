import React from 'react';
import CompareStatRow from '../components/CompareStatRow'

const CompareStats = (props) => {

  const { player1stats } = props
  const { player2stats } = props

  const round = (num) => {
    return Math.round(num * 10)/10
  }

  // debugger
  return (
    <table className="ui selectable celled table">
      <tbody>
        <CompareStatRow stat={"Season"} stat1={player1stats.season.year} stat2={player2stats.season.year}/>
        {round(player1stats.fgm/player1stats.gp) > round(player2stats.fgm/player2stats.gp) ? <CompareStatRow stat={"FGM"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.fgm/player1stats.gp)} stat2={round(player2stats.fgm/player2stats.gp)}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.fgm/player1stats.gp)} stat2={round(player2stats.fgm/player2stats.gp)}/>}
        {round(player1stats.fga/player1stats.gp) > round(player2stats.fga/player2stats.gp) ? <CompareStatRow stat={"FGA"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.fga/player1stats.gp)} stat2={round(player2stats.fga/player2stats.gp)}/> : <CompareStatRow stat={"FGA"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.fga/player1stats.gp)} stat2={round(player2stats.fga/player2stats.gp)}/>}
        {round(player1stats.fg3m/player1stats.gp) > round(player2stats.fg3m/player2stats.gp) ? <CompareStatRow stat={"3PM"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.fg3m/player1stats.gp)} stat2={round(player2stats.fg3m/player2stats.gp)}/> : <CompareStatRow stat={"3PM"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.fg3m/player1stats.gp)} stat2={round(player2stats.fg3m/player2stats.gp)}/>}
        {round(player1stats.fg3a/player1stats.gp) > round(player2stats.fg3a/player2stats.gp) ? <CompareStatRow stat={"3PA"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.fg3a/player1stats.gp)} stat2={round(player2stats.fg3a/player2stats.gp)}/> : <CompareStatRow stat={"3PA"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.fg3a/player1stats.gp)} stat2={round(player2stats.fg3a/player2stats.gp)}/>}
        {round(player1stats.ftm/player1stats.gp) > round(player2stats.ftm/player2stats.gp) ? <CompareStatRow stat={"FTM"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.ftm/player1stats.gp)} stat2={round(player2stats.ftm/player2stats.gp)}/> : <CompareStatRow stat={"FTM"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.ftm/player1stats.gp)} stat2={round(player2stats.ftm/player2stats.gp)}/>}
        {round(player1stats.fta/player1stats.gp) > round(player2stats.fta/player2stats.gp) ? <CompareStatRow stat={"FTA"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.fta/player1stats.gp)} stat2={round(player2stats.fta/player2stats.gp)}/> : <CompareStatRow stat={"FTA"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.fta/player1stats.gp)} stat2={round(player2stats.fta/player2stats.gp)}/>}
        {round(player1stats.oreb/player1stats.gp) > round(player2stats.oreb/player2stats.gp) ? <CompareStatRow stat={"OREB"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.oreb/player1stats.gp)} stat2={round(player2stats.oreb/player2stats.gp)}/> : <CompareStatRow stat={"OREB"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.oreb/player1stats.gp)} stat2={round(player2stats.oreb/player2stats.gp)}/>}
        {round(player1stats.dreb/player1stats.gp) > round(player2stats.dreb/player2stats.gp) ? <CompareStatRow stat={"DREB"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.dreb/player1stats.gp)} stat2={round(player2stats.dreb/player2stats.gp)}/> : <CompareStatRow stat={"DREB"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.dreb/player1stats.gp)} stat2={round(player2stats.dreb/player2stats.gp)}/>}
        {round(player1stats.reb/player1stats.gp) > round(player2stats.reb/player2stats.gp) ? <CompareStatRow stat={"REB"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.reb/player1stats.gp)} stat2={round(player2stats.reb/player2stats.gp)}/> : <CompareStatRow stat={"REB"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.reb/player1stats.gp)} stat2={round(player2stats.reb/player2stats.gp)}/>}
        {round(player1stats.ast/player1stats.gp) > round(player2stats.ast/player2stats.gp) ? <CompareStatRow stat={"AST"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.ast/player1stats.gp)} stat2={round(player2stats.ast/player2stats.gp)}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.ast/player1stats.gp)} stat2={round(player2stats.ast/player2stats.gp)}/>}
        {round(player1stats.stl/player1stats.gp) > round(player2stats.stl/player2stats.gp) ? <CompareStatRow stat={"STL"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.stl/player1stats.gp)} stat2={round(player2stats.stl/player2stats.gp)}/> : <CompareStatRow stat={"STL"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.stl/player1stats.gp)} stat2={round(player2stats.stl/player2stats.gp)}/>}
        {round(player1stats.blk/player1stats.gp) > round(player2stats.blk/player2stats.gp) ? <CompareStatRow stat={"BLK"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.blk/player1stats.gp)} stat2={round(player2stats.blk/player2stats.gp)}/> : <CompareStatRow stat={"BLK"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.blk/player1stats.gp)} stat2={round(player2stats.blk/player2stats.gp)}/>}
        {round(player1stats.turnover/player1stats.gp) > round(player2stats.turnover/player2stats.gp) ? <CompareStatRow stat={"TO"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.turnover/player1stats.gp)} stat2={round(player2stats.turnover/player2stats.gp)}/> : <CompareStatRow stat={"TO"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.turnover/player1stats.gp)} stat2={round(player2stats.turnover/player2stats.gp)}/>}
        {round(player1stats.pf/player1stats.gp) > round(player2stats.pf/player2stats.gp) ? <CompareStatRow stat={"PF"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.pf/player1stats.gp)} stat2={round(player2stats.pf/player2stats.gp)}/> : <CompareStatRow stat={"PF"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.pf/player1stats.gp)} stat2={round(player2stats.pf/player2stats.gp)}/>}
        {round(player1stats.pts/player1stats.gp) > round(player2stats.pts/player2stats.gp) ? <CompareStatRow stat={"PTS"} statclass1={"positive"} statclass2={"negative"} stat1={round(player1stats.pts/player1stats.gp)} stat2={round(player2stats.pts/player2stats.gp)}/> : <CompareStatRow stat={"PTS"} statclass1={"negative"} statclass2={"positive"} stat1={round(player1stats.pts/player1stats.gp)} stat2={round(player2stats.pts/player2stats.gp)}/>}
      </tbody>
    </table>
  );
}

export default CompareStats;
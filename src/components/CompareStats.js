import React from 'react';
import CompareStatRow from '../components/CompareStatRow'

const CompareStats = (props) => {

  const { player1stats } = props
  const { player2stats } = props

  return (
    <>
    <h2>Season Total</h2>
    <table className="ui small selectable celled table">
      <tbody>
        <CompareStatRow stat={"Season"} stat1={player1stats.season.year} stat2={player2stats.season.year}/>
        {player1stats.gp > player2stats.gp ? <CompareStatRow stat={"GP"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.gp} stat2={player2stats.gp}/> : <CompareStatRow stat={"GP"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.gp} stat2={player2stats.gp}/>}
        {player1stats.fgm > player2stats.fgm ? <CompareStatRow stat={"FGM"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fgm} stat2={player2stats.fgm}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fgm} stat2={player2stats.fgm}/>}
        {player1stats.fga > player2stats.fga ? <CompareStatRow stat={"FGA"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fga} stat2={player2stats.fga}/> : <CompareStatRow stat={"FGA"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fga} stat2={player2stats.fga}/>}
        {player1stats.fg3m > player2stats.fg3m ? <CompareStatRow stat={"3PM"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fg3m} stat2={player2stats.fg3m}/> : <CompareStatRow stat={"3PM"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fg3m} stat2={player2stats.fg3m}/>}
        {player1stats.fg3a > player2stats.fg3a ? <CompareStatRow stat={"3PA"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fg3a} stat2={player2stats.fg3a}/> : <CompareStatRow stat={"3PA"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fg3a} stat2={player2stats.fg3a}/>}
        {player1stats.ftm > player2stats.ftm ? <CompareStatRow stat={"FTM"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.ftm} stat2={player2stats.ftm}/> : <CompareStatRow stat={"FTM"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.ftm} stat2={player2stats.ftm}/>}
        {player1stats.fta > player2stats.fta ? <CompareStatRow stat={"FGA"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fta} stat2={player2stats.fta}/> : <CompareStatRow stat={"FTA"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fta} stat2={player2stats.fta}/>}
        {player1stats.oreb > player2stats.oreb ? <CompareStatRow stat={"OREB"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.oreb} stat2={player2stats.oreb}/> : <CompareStatRow stat={"OREB"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.oreb} stat2={player2stats.oreb}/>}
        {player1stats.dreb > player2stats.dreb ? <CompareStatRow stat={"DREB"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.dreb} stat2={player2stats.dreb}/> : <CompareStatRow stat={"DREB"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.dreb} stat2={player2stats.dreb}/>}
        {player1stats.reb > player2stats.reb ? <CompareStatRow stat={"REB"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.reb} stat2={player2stats.reb}/> : <CompareStatRow stat={"REB"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.reb} stat2={player2stats.reb}/>}
        {player1stats.ast > player2stats.ast ? <CompareStatRow stat={"AST"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fgm} stat2={player2stats.fgm}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fgm} stat2={player2stats.fgm}/>}
        {player1stats.stl > player2stats.stl ? <CompareStatRow stat={"STL"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.stl} stat2={player2stats.stl}/> : <CompareStatRow stat={"STL"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.stl} stat2={player2stats.stl}/>}
        {player1stats.blk > player2stats.blk ? <CompareStatRow stat={"BLK"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.blk} stat2={player2stats.blk}/> : <CompareStatRow stat={"BLK"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.blk} stat2={player2stats.blk}/>}
        {player1stats.turnover > player2stats.turnover ? <CompareStatRow stat={"TO"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.turnover} stat2={player2stats.turnover}/> : <CompareStatRow stat={"TO"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.turnover} stat2={player2stats.turnover}/>}
        {player1stats.pf > player2stats.pf ? <CompareStatRow stat={"PF"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.pf} stat2={player2stats.pf}/> : <CompareStatRow stat={"PF"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.pf} stat2={player2stats.pf}/>}
        {player1stats.pts > player2stats.pts ? <CompareStatRow stat={"PTS"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.pts} stat2={player2stats.pts}/> : <CompareStatRow stat={"PTS"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.pts} stat2={player2stats.pts}/>}
      </tbody>
    </table>
    </>
  );
}

export default CompareStats;


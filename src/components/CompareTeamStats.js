import React from 'react';
import CompareStatRow from '../components/CompareStatRow'

const CompareTeamStats = (props) => {

  const { team1roster } = props
  const { team2roster } = props

  let fga1 = 0
  let fgm1 = 0
  let fg3a1 = 0
  let fg3m1 = 0
  let fta1 = 0
  let ftm1 = 0
  let oreb1 = 0
  let dreb1 = 0
  let reb1 = 0
  let ast1 = 0
  let stl1 = 0
  let blk1 = 0
  let turnover1 = 0
  let pf1 = 0
  let pts1 = 0

  let fga2 = 0
  let fgm2 = 0
  let fg3a2 = 0
  let fg3m2 = 0
  let fta2 = 0
  let ftm2 = 0
  let oreb2 = 0
  let dreb2 = 0
  let reb2 = 0
  let ast2 = 0
  let stl2 = 0
  let blk2 = 0
  let turnover2 = 0
  let pf2 = 0
  let pts2 = 0

  team1roster.forEach(stat => {
    fga1 += stat.fga
    fgm1 += stat.fgm
    fg3a1 += stat.fg3a
    fg3m1 += stat.fg3m
    fta1 += stat.fta
    ftm1 += stat.ftm
    oreb1 += stat.oreb
    dreb1 += stat.dreb
    reb1 += stat.reb
    ast1 += stat.ast
    stl1 += stat.stl
    blk1 += stat.blk
    turnover1 += stat.turnover
    pf1 += stat.pf
    pts1 += stat.pts
  })

  team2roster.forEach(stat => {
    fga2 += stat.fga
    fgm2 += stat.fgm
    fg3a2 += stat.fg3a
    fg3m2 += stat.fg3m
    fta2 += stat.fta
    ftm2 += stat.ftm
    oreb2 += stat.oreb
    dreb2 += stat.dreb
    reb2 += stat.reb
    ast2 += stat.ast
    stl2 += stat.stl
    blk2 += stat.blk
    turnover2 += stat.turnover
    pf2 += stat.pf
    pts2 += stat.pts
  })
  
  return (
    <table className="ui selectable celled table">
      <tbody>
        <CompareStatRow stat={"Season"} stat1={team1roster[0].season.year} stat2={team2roster[0].season.year}/>
        {fgm1 > fgm2 ? <CompareStatRow stat={"FGM"} statclass1={"positive"} statclass2={"negative"} stat1={fgm1} stat2={fgm2}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={fgm1} stat2={fgm2}/>}
        {fga1 > fga2 ? <CompareStatRow stat={"FGA"} statclass1={"positive"} statclass2={"negative"} stat1={fga1} stat2={fga2}/> : <CompareStatRow stat={"FGA"} statclass1={"negative"} statclass2={"positive"} stat1={fga1} stat2={fga2}/>}
        {fg3m1 > fg3m2 ? <CompareStatRow stat={"3PM"} statclass1={"positive"} statclass2={"negative"} stat1={fg3m1} stat2={fg3m2}/> : <CompareStatRow stat={"3PM"} statclass1={"negative"} statclass2={"positive"} stat1={fg3m1} stat2={fg3m2}/>}
        {fg3a1 > fg3a2 ? <CompareStatRow stat={"3PA"} statclass1={"positive"} statclass2={"negative"} stat1={fg3a1} stat2={fg3m2}/> : <CompareStatRow stat={"3PA"} statclass1={"negative"} statclass2={"positive"} stat1={fg3a1} stat2={fg3m2}/>}
        {ftm1 > ftm2 ? <CompareStatRow stat={"FTM"} statclass1={"positive"} statclass2={"negative"} stat1={ftm1} stat2={ftm2}/> : <CompareStatRow stat={"FTM"} statclass1={"negative"} statclass2={"positive"} stat1={ftm1} stat2={ftm2}/>}
        {fta1 > fta2 ? <CompareStatRow stat={"FTA"} statclass1={"positive"} statclass2={"negative"} stat1={fta1} stat2={fta2}/> : <CompareStatRow stat={"FTA"} statclass1={"negative"} statclass2={"positive"} stat1={fta1} stat2={fta2}/>}
        {oreb1 > oreb2 ? <CompareStatRow stat={"OREB"} statclass1={"positive"} statclass2={"negative"} stat1={oreb1} stat2={oreb2}/> : <CompareStatRow stat={"OREB"} statclass1={"negative"} statclass2={"positive"} stat1={oreb1} stat2={oreb2}/>}
        {dreb1 > dreb2 ? <CompareStatRow stat={"DREB"} statclass1={"positive"} statclass2={"negative"} stat1={dreb1} stat2={dreb2}/> : <CompareStatRow stat={"DREB"} statclass1={"negative"} statclass2={"positive"} stat1={dreb1} stat2={dreb2}/>}
        {reb1 > reb2 ? <CompareStatRow stat={"REB"} statclass1={"positive"} statclass2={"negative"} stat1={reb1} stat2={reb2}/> : <CompareStatRow stat={"REB"} statclass1={"negative"} statclass2={"positive"} stat1={reb1} stat2={reb2}/>}
        {ast1 > ast2 ? <CompareStatRow stat={"AST"} statclass1={"positive"} statclass2={"negative"} stat1={ast1} stat2={ast2}/> : <CompareStatRow stat={"AST"} statclass1={"negative"} statclass2={"positive"} stat1={ast1} stat2={ast2}/>}
        {stl1 > stl2 ? <CompareStatRow stat={"STL"} statclass1={"positive"} statclass2={"negative"} stat1={stl1} stat2={stl2}/> : <CompareStatRow stat={"STL"} statclass1={"negative"} statclass2={"positive"} stat1={stl1} stat2={stl2}/>}
        {blk1 > blk2 ? <CompareStatRow stat={"BLK"} statclass1={"positive"} statclass2={"negative"} stat1={blk1} stat2={blk2}/> : <CompareStatRow stat={"BLK"} statclass1={"negative"} statclass2={"positive"} stat1={blk1} stat2={blk2}/>}
        {turnover1 > turnover2 ? <CompareStatRow stat={"TO"} statclass1={"positive"} statclass2={"negative"} stat1={turnover1} stat2={turnover2}/> : <CompareStatRow stat={"TO"} statclass1={"negative"} statclass2={"positive"} stat1={turnover1} stat2={turnover2}/>}
        {pf1 > pf2 ? <CompareStatRow stat={"PF"} statclass1={"positive"} statclass2={"negative"} stat1={pf1} stat2={pf2}/> : <CompareStatRow stat={"PF"} statclass1={"negative"} statclass2={"positive"} stat1={pf1} stat2={pf2}/>}
        {pts1 > pts2 ? <CompareStatRow stat={"PTS"} statclass1={"positive"} statclass2={"negative"} stat1={pts1} stat2={pts2}/> : <CompareStatRow stat={"PTS"} statclass1={"negative"} statclass2={"positive"} stat1={pts1} stat2={pts2}/>}
      </tbody>
    </table>
  );
}

export default CompareTeamStats;

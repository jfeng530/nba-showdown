import React from 'react';
import CompareStatRow from '../components/CompareStatRow'

const CompareTeamAvg = (props) => {

  const { team1roster } = props
  const { team2roster } = props

  let games1 = 82
  let games2 = 82

  switch(team1roster[0].season.year) {
    case 1998:
      games1 = 50
      break
    case 2011:
      games1 = 66
      break
    default:
      games1 = 82
  }

  switch(team2roster[0].season.year) {
    case 1998:
      games2 = 50
      break
    case 2011:
      games2 = 66
      break
    default:
      games2 = 82 
  }
  
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

  let ptsPerGame1 = Math.round((pts1/games1)*10)/10
  let fgmPerGame1 = Math.round((fgm1/games1)*10)/10
  let fgaPerGame1 = Math.round((fga1/games1)*10)/10
  let fgp1 = Math.round((fgm1/fga1)*1000)/1000
  let fg3mPerGame1 = Math.round((fg3m1/games1)*10)/10
  let fg3aPerGame1 = Math.round((fg3a1/games1)*10)/10
  let fg3p1 = Math.round((fg3m1/fg3a1)*1000)/1000
  let ftmPerGame1 = Math.round((ftm1/games1)*10)/10
  let ftaPerGame1 = Math.round((fta1/games1)*10)/10
  let ftp1 = Math.round((ftm1/fta1)*1000)/1000
  let orebPerGame1 = Math.round((oreb1/games1)*10)/10
  let drebPerGame1 = Math.round((dreb1/games1)*10)/10
  let rebPerGame1 = Math.round((reb1/games1)*10)/10
  let astPerGame1 = Math.round((ast1/games1)*10)/10
  let stlPerGame1 = Math.round((stl1/games1)*10)/10
  let blkPerGame1 = Math.round((blk1/games1)*10)/10
  let toPerGame1 = Math.round((turnover1/games1)*10)/10
  let pfPerGame1 = Math.round((pf1/games1)*10)/10

  let ptsPerGame2 = Math.round((pts2/games2)*10)/10
  let fgmPerGame2 = Math.round((fgm2/games2)*10)/10
  let fgaPerGame2 = Math.round((fga2/games2)*10)/10
  let fgp2 = Math.round((fgm2/fga2)*1000)/1000
  let fg3mPerGame2 = Math.round((fg3m2/games2)*10)/10
  let fg3aPerGame2 = Math.round((fg3a2/games2)*10)/10
  let fg3p2 = Math.round((fg3m2/fg3a2)*1000)/1000
  let ftmPerGame2 = Math.round((ftm2/games2)*10)/10
  let ftaPerGame2 = Math.round((fta2/games2)*10)/10
  let ftp2 = Math.round((ftm2/fta2)*1000)/1000
  let orebPerGame2 = Math.round((oreb2/games2)*10)/10
  let drebPerGame2 = Math.round((dreb2/games2)*10)/10
  let rebPerGame2 = Math.round((reb2/games2)*10)/10
  let astPerGame2 = Math.round((ast2/games2)*10)/10
  let stlPerGame2 = Math.round((stl2/games2)*10)/10
  let blkPerGame2 = Math.round((blk2/games2)*10)/10
  let toPerGame2 = Math.round((turnover2/games2)*10)/10
  let pfPerGame2 = Math.round((pf2/games2)*10)/10

  return (
    <>
    <h2>Season Averages</h2>
    <table className="ui selectable celled table">
      <tbody>
        <CompareStatRow stat={"Season"} stat1={team1roster[0].season.year} stat2={team2roster[0].season.year}/>
        {ptsPerGame1 > ptsPerGame2 ? <CompareStatRow stat={"PTS"} statclass1={"positive"} statclass2={"negative"} stat1={ptsPerGame1} stat2={ptsPerGame2}/> : <CompareStatRow stat={"PTS"} statclass1={"negative"} statclass2={"positive"} stat1={ptsPerGame1} stat2={ptsPerGame2}/>}
        {fgmPerGame1 > fgmPerGame2 ? <CompareStatRow stat={"FGM"} statclass1={"positive"} statclass2={"negative"} stat1={fgmPerGame1} stat2={fgmPerGame2}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={fgmPerGame1} stat2={fgmPerGame2}/>}
        {fgaPerGame1 > fgaPerGame2 ? <CompareStatRow stat={"FGA"} statclass1={"positive"} statclass2={"negative"} stat1={fgaPerGame1} stat2={fgaPerGame2}/> : <CompareStatRow stat={"FGA"} statclass1={"negative"} statclass2={"positive"} stat1={fgaPerGame1} stat2={fgaPerGame2}/>}
        {fgp1 > fgp2 ? <CompareStatRow stat={"FG%"} statclass1={"positive"} statclass2={"negative"} stat1={fgp1} stat2={fgp2}/> : <CompareStatRow stat={"FG%"} statclass1={"negative"} statclass2={"positive"} stat1={fgp1} stat2={fgp2}/>}
        {fg3mPerGame1 > fg3mPerGame2 ? <CompareStatRow stat={"3PM"} statclass1={"positive"} statclass2={"negative"} stat1={fg3mPerGame1} stat2={fg3mPerGame2}/> : <CompareStatRow stat={"3PM"} statclass1={"negative"} statclass2={"positive"} stat1={fg3mPerGame1} stat2={fg3mPerGame2}/>}
        {fg3aPerGame1 > fg3aPerGame2 ? <CompareStatRow stat={"3PA"} statclass1={"positive"} statclass2={"negative"} stat1={fg3aPerGame1} stat2={fg3aPerGame2}/> : <CompareStatRow stat={"3PA"} statclass1={"negative"} statclass2={"positive"} stat1={fg3aPerGame1} stat2={fg3aPerGame2}/>}
        {fg3p1 > fg3p2 ? <CompareStatRow stat={"3P%"} statclass1={"positive"} statclass2={"negative"} stat1={fg3p1} stat2={fg3p2}/> : <CompareStatRow stat={"3P%"} statclass1={"negative"} statclass2={"positive"} stat1={fg3p1} stat2={fg3p2}/>}
        {ftmPerGame1 > ftmPerGame2 ? <CompareStatRow stat={"FTM"} statclass1={"positive"} statclass2={"negative"} stat1={ftmPerGame1} stat2={ftmPerGame2}/> : <CompareStatRow stat={"FTM"} statclass1={"negative"} statclass2={"positive"} stat1={ftmPerGame1} stat2={ftmPerGame2}/>}
        {ftaPerGame1 > ftaPerGame2 ? <CompareStatRow stat={"FTA"} statclass1={"positive"} statclass2={"negative"} stat1={ftaPerGame1} stat2={ftaPerGame2}/> : <CompareStatRow stat={"FTA"} statclass1={"negative"} statclass2={"positive"} stat1={ftaPerGame1} stat2={ftaPerGame2}/>}
        {ftp1 > ftp2 ? <CompareStatRow stat={"FT%"} statclass1={"positive"} statclass2={"negative"} stat1={ftp1} stat2={ftp2}/> : <CompareStatRow stat={"FT%"} statclass1={"negative"} statclass2={"positive"} stat1={ftp1} stat2={ftp2}/>}
        {orebPerGame1 > orebPerGame2 ? <CompareStatRow stat={"OREB"} statclass1={"positive"} statclass2={"negative"} stat1={orebPerGame1} stat2={orebPerGame2}/> : <CompareStatRow stat={"OREB"} statclass1={"negative"} statclass2={"positive"} stat1={orebPerGame1} stat2={orebPerGame2}/>}
        {drebPerGame1 > drebPerGame2 ? <CompareStatRow stat={"DREB"} statclass1={"positive"} statclass2={"negative"} stat1={drebPerGame1} stat2={drebPerGame2}/> : <CompareStatRow stat={"DREB"} statclass1={"negative"} statclass2={"positive"} stat1={drebPerGame1} stat2={drebPerGame2}/>}
        {rebPerGame1 > rebPerGame2 ? <CompareStatRow stat={"REB"} statclass1={"positive"} statclass2={"negative"} stat1={rebPerGame1} stat2={rebPerGame2}/> : <CompareStatRow stat={"REB"} statclass1={"negative"} statclass2={"positive"} stat1={rebPerGame1} stat2={rebPerGame2}/>}
        {astPerGame1 > astPerGame2 ? <CompareStatRow stat={"AST"} statclass1={"positive"} statclass2={"negative"} stat1={astPerGame1} stat2={astPerGame2}/> : <CompareStatRow stat={"AST"} statclass1={"negative"} statclass2={"positive"} stat1={astPerGame1} stat2={astPerGame2}/>}
        {stlPerGame1 > stlPerGame2 ? <CompareStatRow stat={"STL"} statclass1={"positive"} statclass2={"negative"} stat1={stlPerGame1} stat2={stlPerGame2}/> : <CompareStatRow stat={"STL"} statclass1={"negative"} statclass2={"positive"} stat1={stlPerGame1} stat2={stlPerGame2}/>}
        {blkPerGame1 > blkPerGame2 ? <CompareStatRow stat={"BLK"} statclass1={"positive"} statclass2={"negative"} stat1={blkPerGame1} stat2={blkPerGame2}/> : <CompareStatRow stat={"BLK"} statclass1={"negative"} statclass2={"positive"} stat1={blkPerGame1} stat2={blkPerGame2}/>}
        {toPerGame1 > toPerGame2 ? <CompareStatRow stat={"TO"} statclass1={"positive"} statclass2={"negative"} stat1={toPerGame1} stat2={toPerGame2}/> : <CompareStatRow stat={"TO"} statclass1={"negative"} statclass2={"positive"} stat1={toPerGame1} stat2={toPerGame2}/>}
        {pfPerGame1 > pfPerGame2 ? <CompareStatRow stat={"PF"} statclass1={"positive"} statclass2={"negative"} stat1={pfPerGame1} stat2={pfPerGame2}/> : <CompareStatRow stat={"PF"} statclass1={"negative"} statclass2={"positive"} stat1={pfPerGame1} stat2={pfPerGame2}/>}
      </tbody>
    </table>
    </>
  );
}

export default CompareTeamAvg;

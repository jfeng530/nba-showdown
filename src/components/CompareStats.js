import React from 'react';
import CompareStatRow from '../components/CompareStatRow'

const CompareStats = (props) => {

  const { player1stats } = props
  const { player2stats } = props
  // debugger
  return (
    <table className="ui selectable celled table">
      <tbody>
        {player1stats.fgm > player2stats.fgm ? <CompareStatRow stat={"FGM"} statclass1={"positive"} statclass2={"negative"} stat1={player1stats.fgm} stat2={player2stats.fgm}/> : <CompareStatRow stat={"FGM"} statclass1={"negative"} statclass2={"positive"} stat1={player1stats.fgm} stat2={player2stats.fgm}/>}
      </tbody>
    </table>
  );
}

export default CompareStats;


import React from 'react';

const CompareStatRow = (props) => {
  return (
    <tr className="center aligned">
      <td className={props.statclass1}>
        {props.stat1}
      </td>
      <th className="two wide">
        {props.stat}
      </th>
      <td className={props.statclass2}>
        {props.stat2}
      </td>
    </tr>
  );
}

export default CompareStatRow;

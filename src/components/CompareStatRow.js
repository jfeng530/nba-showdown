import React from 'react';

const CompareStatRow = (props) => {
  return (
    <tr>
      <td className={props.statclass1}>
        {props.stat1}
      </td>
      <th>
        {props.stat}
      </th>
      <td className={props.statclass2}>
        {props.stat2}
      </td>
    </tr>
  );
}

export default CompareStatRow;

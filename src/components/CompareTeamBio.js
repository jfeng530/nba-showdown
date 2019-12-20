import React from 'react';

const CompareTeamBio = (props) => {

  const {team} = props

  return (
    <div>
      {team.full_name}
    </div>
  )
}

export default CompareTeamBio;

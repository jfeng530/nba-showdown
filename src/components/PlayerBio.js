import React from 'react';

const PlayerBio = (props) => {

    const { player } = props

    return (
        <div>
            <h1>{player.first_name}</h1>
            <h1>{player.first_name}</h1>
            <h3>{player.position}</h3>
            <h3>{player.height_feet}</h3>
            <h3>{player.height_inches}</h3>
            <h3>{player.weight_pounds}</h3>
        </div>
    )
}

export default PlayerBio;


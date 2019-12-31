import React from 'react';

const PlayerBio = (props) => {

    const { player } = props
    debugger
    return (
        <div className="ui centered card">
            <div className="content">
                <a className="header">{player.first_name} {player.last_name}</a>
                <div className="ui list">
                    <a className="item">Position: {player.position}</a>
                    <a className="item">Height: {player.height_feet}'{player.height_inches}"</a>
                    <a className="item">Weight: {player.weight_pounds} lbs</a>
                </div>
            </div>
        </div>
    )
}

export default PlayerBio;


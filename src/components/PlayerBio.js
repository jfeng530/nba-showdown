import React from 'react';

const PlayerBio = (props) => {

    const { player } = props
    const { teams } = props

    let renderTeamLogos = teams.map(team => <img className="ui tiny image" src={team.logo} />)
    // debugger
    return (
        <div className="ui internally celled grid">
            <div className="row">
                <div className="eight wide column">
                    <h1 className="ui header">
                        {player.first_name} {player.last_name}
                        <div className="sub header">Position: {player.position}</div>
                        <div className="sub header">Height: {player.height_feet}'{player.height_inches}"</div>
                        <div className="sub header">Weight: {player.weight_pounds}</div>
                    </h1>
                </div>
                <div className="eight wide column">
                    <div className="ui tiny images">
                        {renderTeamLogos}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerBio;


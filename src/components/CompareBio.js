import React from 'react';

const CompareBio = (props) => {

    const { seasonStat } = props

    return (
        <div className="ui centered card">
            <div className="content">
                <div className="header">{seasonStat.player.first_name} {seasonStat.player.last_name}</div>
                <div className="ui list">
                    <div className="item">Position: {seasonStat.player.position}</div>
                    <div className="item">Height: {seasonStat.player.height_feet}'{seasonStat.player.height_inches}"</div>
                    <div className="item">Weight: {seasonStat.player.weight_pounds} lbs</div>
                </div>
            </div>
        </div>
    );
}

export default CompareBio;

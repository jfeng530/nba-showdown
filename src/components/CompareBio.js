import React from 'react';

const CompareBio = (props) => {

    const { seasonStat } = props

    return (
        <div className="ui centered card">
            <div className="content">
                <a className="header">{seasonStat.player.first_name} {seasonStat.player.last_name}</a>
                <div className="ui list">
                    <a className="item">Position: {seasonStat.player.position}</a>
                    <a className="item">Height: {seasonStat.player.height_feet}'{seasonStat.player.height_inches}"</a>
                    <a className="item">Weight: {seasonStat.player.weight_pounds} lbs</a>
                </div>
            </div>
        </div>
    );
}

export default CompareBio;

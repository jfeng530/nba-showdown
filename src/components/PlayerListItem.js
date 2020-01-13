import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class PlayerListItem extends Component {
    render() {
        const {player} = this.props
        return (
            <div className="item">
                <div className="content">
                    <h6 className="header">
                        <NavLink to={"/nba-showdown/players/" + player.id}>{player.first_name} {player.last_name}</NavLink>
                    </h6>
                </div>
            </div>
        );
    }
}

export default PlayerListItem;

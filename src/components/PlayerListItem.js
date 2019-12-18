import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class PlayerListItem extends Component {
    render() {
        const {player} = this.props
        return (
            <tr>
                <td>
                <NavLink to={"/players/" + player.id}>{player.first_name} {player.last_name}</NavLink>
                </td>
            </tr>
        );
    }
}

export default PlayerListItem;

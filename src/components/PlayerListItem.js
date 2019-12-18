import React, { Component } from 'react';

export class PlayerListItem extends Component {
    render() {
        const {player} = this.props
        return (
            <tr>
                <td>{player.first_name} {player.last_name}</td>
            </tr>
        );
    }
}

export default PlayerListItem;

import React, { Component } from 'react';
import PlayerListItem from '../components/PlayerListItem'

export class PlayerList extends Component {
    render() {

        const renderPlayers = this.props.players.map(player => <PlayerListItem key={player.id} player={player}/>)

        return (
            <div className="ui very relaxed animated list">
                {renderPlayers}
            </div>
        );
    }
}

export default PlayerList;

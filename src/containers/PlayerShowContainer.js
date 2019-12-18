import React, { Component } from 'react';
import PlayerBio from '../components/PlayerBio'
import PlayerStatList from '../containers/PlayerStatList'

export class PlayerShowContainer extends Component {

    state = {
        player: {}
    }

    componentWillMount(){
        fetch(`http://localhost:3000/players/${this.props.playerId}`)
        .then(r => r.json())
        .then(player => {
            this.setState({
                player: player
            })
        })
    }

    render() {
        return (
            <div>
                <PlayerBio key={this.state.player.id} player={this.state.player}/>
                <div className="ui divider"></div>
                <PlayerStatList playerId={this.props.playerId} />
            </div>
        );
    }
}

export default PlayerShowContainer;

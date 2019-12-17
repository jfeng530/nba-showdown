import React, { Component } from 'react';
import PlayerBio from '../components/PlayerBio'
import List from '../components/List'

export class PlayerShowContainer extends Component {

    state = {
        player: {}
    }

    componentDidMount = async() => {
        let rawData = await fetch(`http://localhost:3000/players/${this.props.playerId}`)
        let player = await rawData.json()
        this.setState({
            player: player
        })
    }

    render() {
        return (
            <div>
                <PlayerBio key={this.state.player.id} player={this.state.player}/>
                <List player={this.state.player} />
            </div>
        );
    }
}

export default PlayerShowContainer;

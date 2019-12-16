import React, { Component } from 'react';

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
        console.log(this.state.player)
        return (
            <div>
                <p>{this.state.player.first_name}</p>
                <p>{this.state.player.last_name}</p>
            </div>
        );
    }
}

export default PlayerShowContainer;

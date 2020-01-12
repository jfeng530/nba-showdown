import React, { Component } from 'react';
import PlayerBio from '../components/PlayerBio'
import PlayerStatList from '../containers/PlayerStatList'

export class PlayerShowContainer extends Component {

    state = {
        player: {},
        teams: []
    }

    componentWillMount(){
        fetch(`http://nba-showdown.herokuapp.com/players/${this.props.playerId}`)
        .then(r => r.json())
        .then(player => {
            this.setState({
                player: player
            })
        })
        fetch(`http://nba-showdown.herokuapp.com/players/${this.props.playerId}/teams`)
        .then(r => r.json())
        .then(teams => {
            this.setState({
                teams: teams
            })
        })
    }

    render() {
        return (
            <div>
                <PlayerBio key={this.state.player.id} teams={this.state.teams} player={this.state.player}/>
                <div className="ui divider"></div>
                <PlayerStatList playerId={this.props.playerId} />
            </div>
        );
    }
}

export default PlayerShowContainer;

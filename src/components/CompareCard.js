import React, { Component } from 'react';
import { Form, List } from 'semantic-ui-react'

export class CompareCard extends Component {

    state = {
        players: [],
        selectedPlayer: null,
        selectedPlayerSeasons: []
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetch(`http://localhost:3000/players/?search=${event.target.value}`)
            .then(r => r.json())
            .then(players => {
                this.setState({
                    players: players
                })
            })
        }
    }

    handlePlayerClick = (player) => {
        fetch(`http://localhost:3000/players/${player.id}/seasons`)
        .then(r => r.json())
        .then(seasons => {
            this.setState({
                selectedPlayer: player,
                selectedPlayerSeasons: seasons
            })
        })
    }

    handleSeasonClick = (season) => {
        if (this.props.setPlayer1) {
            this.props.setPlayer1(season)
            this.setState({
                selectedPlayerSeasons: null
            })
        } else {
            this.props.setPlayer2(season)
            this.setState({
                selectedPlayerSeasons: null
            })
        }
    }

    renderPlayers = this.state.players.map(player => <List.Item onClick={this.handlePlayerClick(player.id)}>{player.first_name} {player.last_name}</List.Item>)

    renderPlayerSeasons = this.state.selectedPlayerSeasons.map(season => <List.Item onClick={this.handleSeasonClick(season)}>{season.year}</List.Item>)

    render() {
        return (
            <>
                <div className="ui blue inverted segment">
                    <div className="ui blue inverted form">
                        <label>Player Name</label>
                        <input placeholder='Enter a name' onKeyDown={this.handleKeyDown} />
                    </div>
                </div>
                <List>
                    {this.renderPlayers}
                    {this.state.selectedPlayer ? this.renderPlayerSeasons : null}
                </List>
            </>
        )
    }
}

export default CompareCard;

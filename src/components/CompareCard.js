import React, { Component } from 'react';
import { Form, List } from 'semantic-ui-react'

export class CompareCard extends Component {

    state = {
        players: []
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

    handleClick = (player) => {
        if (this.props.setPlayer1) {
            this.props.setPlayer1(player)
        } else {
            this.props.setPlayer2(player)
        }
    }

    renderPlayers = this.state.players.map(player => <List.Item onClick={this.handleClick(player)}>{player.first_name} {player.last_name}</List.Item>)

    render() {
        return (
            <>
            <Form>
                <Form.Field>
                    <label>Player Name</label>
                    <input placeholder='Enter a name' onKeyDown={this.handleKeyDown} />
                </Form.Field>
            </Form>
            <List>
                {this.renderPlayers}
            </List>
            </>
        )
    }
}

export default CompareCard;

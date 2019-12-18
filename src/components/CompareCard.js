import React, { Component } from 'react';
import ComparePlayerListItem from '../components/ComparePlayerListItem'

export class CompareCard extends Component {

  state = {
      players: [],
      selectedPlayer: null,
      selectedPlayerSeasons: []
  }

  handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          fetch(`http://localhost:3000/players?search=${event.target.value}`)
          .then(r => r.json())
          .then(players => {
              this.setState({
                  players: players
              })
          })
      }
  }

  handlePlayerClick = (player) => {
      fetch(`http://localhost:3000/players/${player.id}/stats`)
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
  
  render() {
      let renderPlayers = this.state.players.map(player => <ComparePlayerListItem key={player.id} handlePlayerClick={this.handlePlayerClick} player={player}/>)

      // let renderPlayerSeasons = this.state.selectedPlayerSeasons.map(season => <List.Item onClick={this.handleSeasonClick(season)}>{season.year}</List.Item>)
      return (
        <>
          <div className="ui blue inverted segment">
            <div className="ui blue inverted form">
              <label>Player Name</label>
              <input placeholder='Enter a name' onKeyDown={this.handleKeyDown} />
            </div>
          </div>
          <div className="ui list">
            {renderPlayers}
            {this.state.selectedPlayer ? this.renderPlayerSeasons : null}
          </div>
        </>
      )
  }
}

export default CompareCard;

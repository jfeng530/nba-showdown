import React, { Component } from 'react';
import { connect } from 'react-redux'
import ComparePlayerListItem from '../components/ComparePlayerListItem'
import ComparePlayerSeasons from '../components/ComparePlayerSeasons'
import CompareInput from '../components/CompareInput'

export class CompareCard extends Component {

  state = {
      displayPlayers: [],
      selectedPlayer: null,
      selectedPlayerSeasons: []
  }

  handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        let input = event.target.value
        this.setState({
            displayPlayers: this.props.players.filter(player => player.full_name.toLowerCase().includes(input))
        })
      }
  }

  handlePlayerClick = (player) => {
      fetch(`https://nba-showdown.herokuapp.com/players/${player.id}/stats`)
      .then(r => r.json())
      .then(seasons => {
        // debugger
          this.setState({
              displayPlayers: [],
              selectedPlayer: player,
              selectedPlayerSeasons: seasons.sort(function(a, b){return a.season.year - b.season.year})
          })
      })
  }

  handleSeasonClick = (season) => {
      if (this.props.setPlayer1) {
          this.props.setPlayer1(season)
          this.setState({
              selectedPlayerSeasons: null,
              selectedPlayer: null
          })
      } else {
          this.props.setPlayer2(season)
          this.setState({
              selectedPlayerSeasons: null,
              selectedPlayer: null
          })
      }
  }
  
  render() {
      
      let renderPlayers = this.state.displayPlayers.map(player => <ComparePlayerListItem key={player.id} player={player} handlePlayerClick={this.handlePlayerClick}/>)
      let renderPlayerSeasons = this.state.selectedPlayerSeasons.map(season => <ComparePlayerSeasons key={season.id} season={season} handleSeasonClick={this.handleSeasonClick}/>)
      
      return (
        <>
          {this.state.selectedPlayer ? null : <CompareInput handleKeyDown={this.handleKeyDown}/>}
          <div className="ui selection list">
            {this.state.selectedPlayer ? this.state.selectedPlayer.full_name : renderPlayers}
            {this.state.selectedPlayer ? renderPlayerSeasons : null}
          </div>
        </>
      )
  }
}

const mapStateToProps = state => {
    return { players: state.players }
}

export default connect(mapStateToProps)(CompareCard);

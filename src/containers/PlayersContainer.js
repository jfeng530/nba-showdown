import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import PlayerList from '../containers/PlayerList'

export class PlayersContainer extends Component {

    state = {
        players: [],
        displayPlayers: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/players`)
        .then(r => r.json())
        .then(players => {
            this.setState({
                players: players
            })
        })
    }

    filterPlayers = (event) => {
        if(event.target.value === "") {
            this.setState({
                displayPlayers: []
            })
        } else {
            this.setState({
                displayPlayers: this.state.players.filter(player => (player.first_name + player.last_name).includes(event.target.value))
            })
        }
    }

    render() {
        return (
            <div className="ui container center aligned">
                <SearchBar onChange={this.filterPlayers} />
                <PlayerList players={this.state.displayPlayers}/>
            </div>
        );
    }
}

export default PlayersContainer;

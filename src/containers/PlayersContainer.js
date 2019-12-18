import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import PlayerList from '../containers/PlayerList'
import Spinner from 'react-bootstrap/Spinner'

export class PlayersContainer extends Component {

    state = {
        loaded: false,
        players: [],
        displayPlayers: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/players`)
        .then(r => r.json())
        .then(players => {
            this.setState({
                loaded: true,
                players: players
            })
        })
    }

    filterPlayers = (event) => {
        let input = event.target.value.toLowerCase()
        if(event.target.value === "") {
            this.setState({
                displayPlayers: []
            })
        } else {
            this.setState({
                displayPlayers: this.state.players.filter(player => player.full_name.toLowerCase().includes(input))
            })
        }
    }

    render() {
        return (
            <div className="ui container center aligned">
                {this.state.loaded?<SearchBar onChange={this.filterPlayers} />:<Spinner animation="grow" variant="primary"/>}
                <PlayerList players={this.state.displayPlayers}/>
            </div>
        );
    }
}

export default PlayersContainer;

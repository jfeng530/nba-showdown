import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import PlayerList from '../containers/PlayerList'

export class PlayersContainer extends Component {

    state = {
        displayPlayers: []
    }

    filterPlayers = (event) => {
        let input = event.target.value.toLowerCase()
        if(event.target.value === "") {
            this.setState({
                displayPlayers: []
            })
        } else {
            this.setState({
                displayPlayers: this.props.players.filter(player => player.full_name.toLowerCase().includes(input))
            })
        }
    }

    render() {
        return (
            <div className="ui container center aligned">
                <h4 class="ui horizontal divider header">
                    <i class="basketball ball icon"></i>
                    Search Players
                </h4>
                <br></br>
                <SearchBar onChange={this.filterPlayers} />
                <PlayerList players={this.state.displayPlayers} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { players: state.players }
}

export default connect(mapStateToProps)(PlayersContainer);

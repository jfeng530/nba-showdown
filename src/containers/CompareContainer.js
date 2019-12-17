import React, { Component } from 'react';
import CompareCard from '../components/CompareCard'
import CompareStatsColumn from '../components/CompareStatsColumn'
import CompareBio from '../components/CompareBio'
import { Grid } from 'semantic-ui-react'

export class CompareContainer extends Component {

    state = {
        player1: null,
        player2: null
    }

    setPlayer1 = (player) => {
        this.setState({
            player1: player
        })
    }

    setPlayer2 = (player) => {
        this.setState({
            player2: player
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui two column grid">
                    <div className="column">
                        {this.state.player1 ? <CompareBio player={this.state.player1} /> : <CompareCard setPlayer1={this.setPlayer1}/>}
                    </div>
                    <div className="column">
                        {this.state.player2 ? <CompareBio player={this.state.player2} /> : <CompareCard setPlayer2={this.setPlayer2}/>} 
                    </div>
                </div>
            </div>
        )
    }
}

export default CompareContainer;

import React, { Component } from 'react';
import CompareCard from '../components/CompareCard'
import CompareBio from '../components/CompareBio'
import CompareStats from '../components/CompareStats'
import CompareAvgStats from '../components/CompareAvgStats'

export class CompareContainer extends Component {

    state = {
        player1: null,
        player2: null
    }

    setPlayer1 = (seasonStat) => {
        this.setState({
            player1: seasonStat
        })
    }

    setPlayer2 = (seasonStat) => {
        this.setState({
            player2: seasonStat
        })
    }

    render() {
        return (
            <div className="ui container">
                <h4 className="ui horizontal divider header">
                    <i className="sync icon"></i>
                    Compare Players
                </h4>
                <br></br>
                <div className="ui two column grid">
                    <div className="column">
                        {this.state.player1 ? <CompareBio seasonStat={this.state.player1} /> : <CompareCard setPlayer1={this.setPlayer1}/>}
                    </div>
                    <div className="column">
                        {this.state.player2 ? <CompareBio seasonStat={this.state.player2} /> : <CompareCard setPlayer2={this.setPlayer2}/>} 
                    </div>
                </div>
                {this.state.player1 && this.state.player2 ? <CompareStats player1stats={this.state.player1} player2stats={this.state.player2}/> : null}
                {this.state.player1 && this.state.player2 ? <CompareAvgStats player1stats={this.state.player1} player2stats={this.state.player2}/> : null}
            </div>
        )
    }
}

export default CompareContainer;

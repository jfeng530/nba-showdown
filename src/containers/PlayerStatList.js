import React, { Component } from 'react';
import PlayerStatHeader from '../components/PlayerStatHeader'
import PlayerAvgHeader from '../components/PlayerAvgHeader'
import PlayerStatItem from '../components/PlayerStatItem'
import SeasonAvgItem from '../components/SeasonAvgItem'

export class PlayerStatList extends Component {

    state = {
        stats: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/players/${this.props.playerId}/stats`)
        .then(r => r.json())
        .then(stats => {
            this.setState({
                stats: stats.sort(function(a, b){return a.season.year - b.season.year})
            })
        })
    }

    render() {

        let renderListItems = this.state.stats.map(stat => <PlayerStatItem key={stat.id} stat={stat}/>)
        let renderAvgItems = this.state.stats.map(stat => <SeasonAvgItem key={stat.id} stat={stat}/>)
        
        return (
            <div className="container ui center aligned">
                <h2>Per Game Averages</h2>
                <table className="ui sortable celled compact table">
                    <PlayerAvgHeader />
                    {renderAvgItems}
                </table>
                <h2>Season Totals</h2>
                <table className="ui sortable celled compact table">
                    <PlayerStatHeader />
                    {renderListItems}
                </table>
            </div>
        )
    }
}

export default PlayerStatList;

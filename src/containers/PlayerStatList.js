import React, { Component } from 'react';
import PlayerStatHeader from '../components/PlayerStatHeader'
import PlayerStatItem from '../components/PlayerStatItem'

export class PlayerStatList extends Component {

    state = {
        stats: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/players/${this.props.playerId}/stats`)
        .then(r => r.json())
        .then(stats => {
            // let sortedStats = stats.sort(function(a, b){return a.season.year - b.season.year})
            this.setState({
                stats: stats.sort(function(a, b){return a.season.year - b.season.year})
            })
        })
    }

    render() {

        let renderListItems = this.state.stats.map(stat => <PlayerStatItem key={stat.id} stat={stat}/>)
        
        return (
            <div className="container ui center aligned">
                <table>
                    <PlayerStatHeader />
                    {renderListItems}
                </table>
            </div>
        )
    }
}

export default PlayerStatList;

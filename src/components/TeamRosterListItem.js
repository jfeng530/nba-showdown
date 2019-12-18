import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export class TeamRosterListItem extends Component {

    state = {
        gp: 0
    }

    // componentDidMount(){
    //     fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${this.props.stat.season.year}&player_ids[]=${this.props.stat.player.public_id}`)
    //     .then(r => r.json())
    //     .then(response => {
    //         this.setState({
    //             gp: response.data[0].games_played
    //         })
    //     })
    // }
   
    render(){

        const { stat } = this.props

        return (
            <>
                <tr>
                    <td>
                        <NavLink to={"/players/" + stat.player.id }>{stat.player.first_name} {stat.player.last_name}</NavLink>
                    </td>
                    <td>{this.state.gp}</td>
                    <td>{stat.fgm}</td>
                    <td>{stat.fga}</td>
                    <td>{stat.fg3m}</td>
                    <td>{stat.fg3a}</td>
                    <td>{stat.ftm}</td>
                    <td>{stat.fta}</td>
                    <td>{stat.oreb}</td>
                    <td>{stat.dreb}</td>
                    <td>{stat.reb}</td>
                    <td>{stat.ast}</td>
                    <td>{stat.stl}</td>
                    <td>{stat.blk}</td>
                    <td>{stat.turnover}</td>
                    <td>{stat.pf}</td>
                    <td>{stat.pts}</td>
                </tr>
            </>
        );
    }
}

export default TeamRosterListItem;

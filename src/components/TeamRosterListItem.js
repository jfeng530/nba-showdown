import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export class TeamRosterListItem extends Component {
   
    render(){

        const { stat } = this.props

        return (
            <tr className="center aligned">
                <td>
                    <NavLink to={"/players/" + stat.player.id }>{stat.player.first_name} {stat.player.last_name}</NavLink>
                </td>
                <td>{stat.gp}</td>
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
        );
    }
}

export default TeamRosterListItem;

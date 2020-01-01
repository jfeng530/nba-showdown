import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamRosterAvgItem = (props) => {

    const { stat } = props
    
    return (
        <tr className="center aligned">
            <td>
                <NavLink to={"/players/" + stat.player.id }>{stat.player.first_name} {stat.player.last_name}</NavLink>
            </td>
            <td>{stat.gp}</td>
            <td>{Math.round((stat.fgm/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.fga/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.fgm/stat.fga) * 1000)/1000}</td>
            <td>{Math.round((stat.fg3m/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.fg3a/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.fg3m/stat.fg3a) * 1000)/1000}</td>
            <td>{Math.round((stat.ftm/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.fta/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.ftm/stat.fta) * 1000)/1000}</td>
            <td>{Math.round((stat.oreb/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.dreb/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.reb/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.ast/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.stl/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.blk/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.turnover/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.pf/stat.gp) * 10)/10}</td>
            <td>{Math.round((stat.pts/stat.gp) * 10)/10}</td>
        </tr>
    );
}

export default TeamRosterAvgItem;
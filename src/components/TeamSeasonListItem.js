import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamSeasonListItem = (props) => {

    const { season } = props;
    const { team } = props;
    
    return (
        
        <>
            <tr>
                <td>
                    <NavLink to={"/nba-showdown/teams/" + team.id + "/" + season.year }>{season.year}</NavLink>
                </td>
            </tr>
        </>
    );

}

export default TeamSeasonListItem;
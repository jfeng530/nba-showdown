import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamSeasonListItem = (props) => {

    const { season } = props;
    const { team } = props;
    // debugger
    return (
        
        <>
            <tr>
                <td>
                    <NavLink to={"/teams/" + team.id + "/" + season.year }>{season.year}</NavLink>
                </td>
                <td>{team.abbreviation}</td>
                <td>Their Record Goes Here</td>
            </tr>
        </>
    );

}

export default TeamSeasonListItem;
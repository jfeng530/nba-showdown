import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamSeasonListItem = (props) => {

    const { season } = props;

    return (
        <>
            <tr>
                <td>
                    <NavLink to={"/teams/" + season.teamId + "/" + season.id }>{season.year}</NavLink>
                </td>
                <td>{season.team}</td>
                <td>Their Record Goes Here</td>
            </tr>
        </>
    );

}

export default TeamSeasonListItem;
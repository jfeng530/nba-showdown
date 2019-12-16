import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamListItem = (props) => {

    const { team } = props;

    return (
        <>
                <tr>
                    <td>
                        <NavLink to={"/teams" + team.id}>{team.full_name}</NavLink>
                    </td>
                    <td>{team.abbreviation}</td>
                    <td>{team.conference}</td>
                    <td>{team.division}</td>
                </tr>
        </>
    );

}

export default TeamListItem;

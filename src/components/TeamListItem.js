import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamListItem = (props) => {

    const { team } = props;

    return (
        <>
        <br></br>
        <NavLink to={"/nba_frontend/teams/" + team.id}>
            <div className="item">
                <img className="logo" src={team.logo} alt={team.full_name}/>
            </div>
        </NavLink>
        <br></br>
        </>
    );

}

export default TeamListItem;
